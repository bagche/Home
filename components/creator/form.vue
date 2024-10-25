<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const schema = z.object({
  name: z.string(),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  name: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data);
}
</script>
<template>
  <UForm :schema="schema" :state="state" class="mb-20 mt-10" @submit="onSubmit">
    <label
      class="mx-auto mt-8 relative min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center py-2 px-2 rounded-2xl gap-2 focus-within:border-gray-300"
      for="search-bar"
    >
      <UInput
        :ui="{
          wrapper: 'p-10',
        }"
        v-model="state.name"
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Jane Doe"
        aria-label="Full name"
        id="search-bar"
        name="q"
        size="xl"
      />
      <UButton
        type="submit"
        color="black"
        class="px-6 text-center text-md py-3 rounded-xl transition-all"
      >
        <span class="text-center mx-2"> Build </span>
      </UButton>
    </label>
    <p class="text-white mt-5 text-xl">1- Creating New one</p>
  </UForm>
</template>
