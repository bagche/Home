<script lang="ts" setup>
// const { isDark } = useDark();
useHead({
  title: "Bagche app",
  meta: [{ name: "description", content: "This is Bagche:)" }],
});
</script>

<template>
  <!-- <Html :class="isDark ? 'dark' : 'light'">
    <Body class="">
    -->
  <UApp>
    <NuxtLayout>
      <!-- <SeoKit /> -->
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
<style>
@import "tailwindcss";
@import "@nuxt/ui";

@theme {
  --container-padding-default: 1rem;
  --container-padding-sm: 2rem;
  --container-padding-lg: 3rem;
  --container-padding-xl: 4rem;

  --breakpoint-3xl: 1920px;

  --color-ultramarine-50: #e3e1f9;
  --color-ultramarine-100: #c7c2f3;
  --color-ultramarine-200: #8f8be8;
  --color-ultramarine-300: #5754dd;
  --color-ultramarine-400: #120a8f;
  --color-ultramarine-500: #120a8f;
  --color-ultramarine-600: #10087f;
  --color-ultramarine-700: #0d066b;
  --color-ultramarine-800: #0a0557;
  --color-ultramarine-900: #070341;
  --color-ultramarine-950: #040220;

  --font-weight-hairline: 100;
  --font-weight-thin: 200;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;
}
:root {
  --ui-color-primary-50: #e3e1f9;
  --ui-color-primary-100: #c7c2f3;
  --ui-color-primary-200: #8f8be8;
  --ui-color-primary-300: #5754dd;
  --ui-color-primary-400: #120a8f;
  --ui-color-primary-500: #120a8f;
  --ui-color-primary-600: #10087f;
  --ui-color-primary-700: #0d066b;
  --ui-color-primary-800: #0a0557;
  --ui-color-primary-900: #070341;
  --ui-color-primary-950: #040220;

  --font-weight-hairline: 100;
  --font-weight-thin: 200;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;
}
</style>
