<script lang="ts" setup>
const { isDark } = useDark();
useHead({
  title: "Bagche app",
  meta: [{ name: "description", content: "This is Bagche:)" }],
});
</script>
<template>
  <Html :class="isDark ? 'dark' : 'light'">
    <Body class="">
      <NuxtLayout>
        <!-- <SeoKit /> -->
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
      <UNotifications />
    </Body>
  </Html>
</template>
