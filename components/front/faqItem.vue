<template>
  <div class="mb-4">
    <div
      @click="toggle"
      class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-dark-2"
    >
      <h3 class="text-lg font-semibold text-dark dark:text-white">
        {{ question }}
      </h3>
      <Icon :name="isOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'" size="lg" />
    </div>
    <div v-if="isOpen" class="mt-2 px-4">
      <p class="text-base text-body-color dark:text-dark-6">
        {{ answer }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Define props with TypeScript
defineProps<{
  question: string;
  answer: string;
}>();

// Local state for accordion open/close
const isOpen = ref(false);

function toggle() {
  isOpen.value = !isOpen.value;
}
</script>
