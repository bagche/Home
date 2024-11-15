import { z } from "zod";
import { defineEventHandler, readBody, createError } from "h3";

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

  const { title, description } = validation.data;
  const { githubRepo, githubToken, cloudflareAccountId, cloudflareApiToken } =
    useRuntimeConfig(event);

  // Step 1: Create GitHub Repository from Template
  const githubAPI = `https://api.github.com/repos/${githubRepo}/generate`;

  const githubResponse = await $fetch(githubAPI, {
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
  if (!githubResponse || githubResponse.error) {
    throw createError({
      statusCode: githubResponse?.status || 500,
      message:
        githubResponse?.error?.message ||
        "Failed to create repository from template",
    });
  }

  const repoUrl = githubResponse.html_url;
  console.log("Repository created successfully:", repoUrl);

  // Step 2: Create Cloudflare Pages Project
  const projectName = title.replace(/\s+/g, "-").toLowerCase();
  const cloudflareAPI = `https://api.cloudflare.com/client/v4/accounts/${cloudflareAccountId}/pages/projects`;

  const pagesResponse = await $fetch(cloudflareAPI, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cloudflareApiToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: projectName,
      source: {
        type: "github",
        config: {
          owner: githubRepo.split("/")[0], // GitHub owner
          repo_name: title, // GitHub repository name
          production_branch: "main",
        },
      },
    }),
  });

  // Handle errors from the Cloudflare API response
  if (!pagesResponse || pagesResponse.errors) {
    throw createError({
      statusCode: 500,
      message: "Failed to create Cloudflare Page",
      data: pagesResponse?.errors || "Unknown error",
    });
  }

  // Return the final success response with GitHub and Cloudflare URLs
  return {
    message: "Repository and Cloudflare Page created successfully",
    repoUrl,
    pageUrl: `https://${projectName}.pages.dev`,
  };
});
