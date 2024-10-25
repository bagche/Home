<template>
  <div class="wow fadeInUp group mb-12" :data-wow-delay="delay">
    <div
      class="relative z-10 mb-10 flex h-[80px] w-[80px] items-center justify-center rounded-[14px] bg-primary"
    >
      <span
        class="absolute left-0 top-0 -z-[1] mb-8 flex rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"
      ></span>
      <Icon :name="icon" size="5xl" class="text-4xl text-white" />
    </div>
    <h4 class="mb-3 text-xl font-bold text-dark dark:text-white">
      {{ title }}
    </h4>
    <p class="mb-8 text-body-color dark:text-dark-6 lg:mb-9 text-warp">
      {{ description }}
    </p>
    <NuxtLink
      href="#"
      class="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
    >
      Learn More
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
// Define props with TypeScript
defineProps<{
  title: string;
  description: string;
  icon: string;
  delay: string;
}>();
</script>
