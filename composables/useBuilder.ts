/***
 * Building Flow
 *
 * 1- Generate new app .env from user descriptions with OpenAI
 * 2- Use core template and generate new source
 * 3- Push .env and launch new repository
 * 4- Create new Cloudflare Page with new GitHub repository
 * 5- Return the new Cloudflare Page URL
 */

export default () => {
  const formState = reactive({
    descriptions: undefined,
  });
  const buildStatus = ref("mdi:brush");
  const progressStatus = ref(false);
  const inputPlaceholder = ref(
    "I want a simple online shop to sell my source code over the internet..."
  );

  // Function to handle the build process
  const startBuilding = async () => {
    if (!formState.descriptions) {
      console.error("Description is required to start building.");
      return;
    }

    // Indicate the building process has started
    progressStatus.value = true;
    buildStatus.value = "mdi:loading";

    try {
      const response: any = await $fetch("/api/github/newRepo", {
        method: "POST",
        body: {
          title: formState.descriptions,
          description: formState.descriptions,
        },
      });

      if (response.repoUrl) {
        console.log("Repository created successfully:", response.repoUrl);
        buildStatus.value = "mdi:check-circle";
      } else {
        console.error("Build failed:", response.message);
        buildStatus.value = "mdi:alert-circle";
      }
    } catch (error) {
      console.error("Error during build:", error);
      buildStatus.value = "mdi:alert-circle";
    } finally {
      // Reset progress status
      progressStatus.value = false;
    }
  };

  return {
    formState,
    progressStatus,
    inputPlaceholder,
    buildStatus,
    startBuilding,
  };
};
