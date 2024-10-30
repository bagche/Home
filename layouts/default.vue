<script lang="ts" setup>
const colorMode = useColorMode();

// import { useDark, useToggle } from "@vueuse/core";

// const isDark = useDark();
// const toggleDark = useToggle(isDark);
const toggleDark = () => {
  console.log(colorMode.preference);
};
</script>
<template>
  <main class=" ">
    <!-- ====== Navbar Section Start -->
    <div
      class="fixed dark:text-white dark:bg-ultramarine-500 bg-white text-ultramarine-500 left-0 top-0 z-40 flex w-full items-center"
    >
      <UContainer>
        <div class="relative -mx-4 flex items-center justify-between">
          <div class="w-60 max-w-full px-4">
            <nuxt-link to="/" class="text-2xl font-bold block w-full py-5">
              Bagche.App
            </nuxt-link>
          </div>
          <div class="flex w-full items-center justify-between px-4">
            <div>
              <button
                id="navbarToggler"
                class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  class="relative my-[6px] block h-[2px] w-[30px] bg-white"
                ></span>
                <span
                  class="relative my-[6px] block h-[2px] w-[30px] bg-white"
                ></span>
                <span
                  class="relative my-[6px] block h-[2px] w-[30px] bg-white"
                ></span>
              </button>
              <nav
                id="navbarCollapse"
                class="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6"
              >
                <ul class="blcok lg:flex 2xl:ml-20">
                  <li class="group relative">
                    <nuxt-link
                      to="#home"
                      class="ud-menu-scroll mx-8 flex py-2 font-medium group-hover:text-ultramarine-500 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg: lg:group-hover: lg:group-hover:opacity-70"
                    >
                      Home
                    </nuxt-link>
                  </li>
                  <li class="group relative">
                    <nuxt-link
                      to="#features"
                      class="ud-menu-scroll mx-8 flex py-2 font-medium group-hover:text-ultramarine-500 dark: lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg: lg:group-hover: lg:group-hover:opacity-70"
                    >
                      Features
                    </nuxt-link>
                  </li>
                  <li class="group relative">
                    <nuxt-link
                      to="#about"
                      class="ud-menu-scroll mx-8 flex py-2 font-medium group-hover:text-ultramarine-500 dark: lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg: lg:group-hover: lg:group-hover:opacity-70 xl:ml-10"
                    >
                      About
                    </nuxt-link>
                  </li>
                  <li class="group relative">
                    <nuxt-link
                      to="#pricing"
                      class="ud-menu-scroll mx-8 flex py-2 font-medium group-hover:text-ultramarine-500 dark: lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg: lg:group-hover: lg:group-hover:opacity-70 xl:ml-10"
                    >
                      Pricing
                    </nuxt-link>
                  </li>
                  <li class="group relative">
                    <nuxt-link
                      to="#faq"
                      class="ud-menu-scroll mx-8 flex py-2 font-medium group-hover:text-ultramarine-500 dark: lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg: lg:group-hover: lg:group-hover:opacity-70 xl:ml-10"
                    >
                      FAQ
                    </nuxt-link>
                  </li>
                  <li class="group relative">
                    <nuxt-link
                      to="#blog"
                      class="ud-menu-scroll mx-8 flex py-2 font-medium group-hover:text-ultramarine-500 dark: lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg: lg:group-hover: lg:group-hover:opacity-70 xl:ml-10"
                    >
                      Blog
                    </nuxt-link>
                  </li>
                  <li class="group relative">
                    <nuxt-link
                      to="#contact"
                      class="ud-menu-scroll mx-8 flex py-2 font-medium group-hover:text-ultramarine-500 dark: lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg: lg:group-hover: lg:group-hover:opacity-70 xl:ml-10"
                    >
                      Contact
                    </nuxt-link>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="flex items-center justify-end pr-16 lg:pr-0 gap-4">
              <UButton
                variant="ghost"
                class="block dark:hidden cursor-pointer"
                icon="i-heroicons-moon"
                @click="() => ($colorMode.preference = 'dark')"
              />
              <UButton
                variant="ghost"
                icon="i-heroicons-sun"
                class="hidden dark:block cursor-pointer text-white"
                @click="() => ($colorMode.preference = 'light')"
              />

              <UButton variant="ghost" class="cursor-pointer dark:text-white">
                Sign In/Up
              </UButton>
            </div>
          </div>
        </div>
      </UContainer>
    </div>
    <!-- ====== Navbar Section End -->
    <NuxtPage />
    <!-- ====== Footer Section Start -->
    <FrontFooter />
    <!-- ====== Footer Section End -->
  </main>
</template>
