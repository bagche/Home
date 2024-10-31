<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
const {
  buildStatus,
  startBuilding,
  inputPlaceholder,
  progressStatus,
  formState,
} = useBuilder();
const schema = z.object({
  descriptions: z.string(),
});

type Schema = z.output<typeof schema>;

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  // Do something with data
  console.log(event.data);
  startBuilding(event.data.descriptions);
};
</script>
<template>
  <UForm
    :schema="schema"
    :state="formState"
    class="mb-10 mt-10"
    @submit="onSubmit"
  >
    <label
      class="mx-auto mt-8 relative min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center py-2 px-2 rounded-2xl gap-2 border-2 border-ultramarine-500 dark:border-white text-white"
      for="search-bar"
    >
      <UInput
        variant="none"
        :ui="{
          wrapper: 'p-10',
        }"
        v-model="formState.descriptions"
        class="border-ultramarine-500 w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        :placeholder="inputPlaceholder"
        aria-label="App Descriptions"
        id="search-bar"
        descriptions="q"
        size="xl"
      />
      <UButton
        :loading="progressStatus"
        type="submit"
        size="xl"
        class="rounded-xl"
        :icon="buildStatus"
      >
        <span class="text-center mx-2 pr-3"> Build </span>
      </UButton>
    </label>
    <p class="text-white mt-5 text-md">Creating New one ...</p>
  </UForm>
</template>
