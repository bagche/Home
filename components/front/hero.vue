<template>
  <section
    id="home"
    class="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
  >
    <div class="-mx-4 flex flex-wrap items-center">
      <div class="w-full px-4">
        <!-- Hero Content -->
        <div
          class="hero-content wow fadeInUp mx-auto max-w-[980px] text-center"
          data-wow-delay=".2s"
        >
          <h1
            class="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]"
          >
            Build Your Website, Connect Seamlessly
          </h1>
          <p
            class="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]"
          >
            Design professional websites with real-time chat, AI-powered tools,
            and advanced communication – all in one seamless platform.
          </p>

          <!-- Example Form Component -->
          <CreatorForm />

          <p class="mb-4 text-center text-base font-medium text-white">
            Powered by trusted technologies
          </p>

          <!-- Updated Icon Links Section -->
          <div
            class="wow fadeInUp flex items-center justify-center gap-6 text-center text-6xl"
            data-wow-delay=".3s"
          >
            <NuxtLink
              href="https://github.com"
              target="_blank"
              class="text-white/60 transition hover:text-white"
            >
              <Icon name="mdi:github" size="2xl" />
            </NuxtLink>

            <NuxtLink
              href="https://twitter.com"
              target="_blank"
              class="text-white/60 transition hover:text-white"
            >
              <Icon name="mdi:twitter" size="2xl" />
            </NuxtLink>

            <NuxtLink
              href="https://linkedin.com"
              target="_blank"
              class="text-white/60 transition hover:text-white"
            >
              <Icon name="mdi:linkedin" size="2xl" />
            </NuxtLink>

            <NuxtLink
              href="https://www.npmjs.com"
              target="_blank"
              class="text-white/60 transition hover:text-white"
            >
              <Icon name="mdi:npm" size="2xl" />
            </NuxtLink>

            <NuxtLink
              href="https://nuxt.com"
              target="_blank"
              class="text-white/60 transition hover:text-white"
            >
              <Icon name="mdi:vuejs" size="2xl" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
