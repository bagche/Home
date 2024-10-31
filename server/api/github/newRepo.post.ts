import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
});

export default defineEventHandler(async (event) => {
  // Read and validate the request body
  const body = await readBody(event);
  const validation = schema.safeParse(body);

  if (!validation.success) {
    throw createError({
      statusCode: 400,
      message: "Invalid data",
      data: validation.error,
    });
  }

  const { title, description } = validation?.data;
  const { githubRepo, githubToken } = useRuntimeConfig(event);

  // Define GitHub API endpoint using the template repo from context
  const baseAPI = `https://api.github.com/repos/${githubRepo}/generate`;

  console.log(baseAPI, githubToken);
  // API request to create a new repository from the template
  const response = await $fetch(baseAPI, {
    method: "POST",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${githubToken}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: JSON.stringify({
      owner: githubRepo.split("/")[0],
      name: title,
      description,
      private: true,
    }),
  });

  // Handle errors from the GitHub API response
  if (!response || response.error) {
    throw createError({
      statusCode: response?.status || 500,
      message:
        response?.error?.message || "Failed to create repository from template",
    });
  }

  // Return the created repository details
  return {
    message: "Repository created successfully",
    repoUrl: response.html_url,
  };
});
