<template>
  <section class="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
    <div class="container">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div class="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
            <span class="mb-2 block text-lg font-semibold text-primary">
              Features
            </span>
            <h2
              class="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]"
            >
              Empower Your Online Presence
            </h2>
            <p class="text-base text-body-color dark:text-dark-6">
              Build fast, dynamic, and secure websites with integrated tools for
              AI-powered automation and real-time communication. Our platform is
              the one-stop solution to grow your digital footprint and connect
              with your audience seamlessly.
            </p>
          </div>
        </div>
      </div>

      <div class="-mx-4 flex grid grid-cols-4 gap-4">
        <FrontFeatureBox
          title="Seamless Integrations"
          description="Our platform connects your tools effortlessly—from chat apps to video conferencing systems—allowing you to manage everything in one place. No more switching between apps!"
          icon="mdi:tools"
          delay=".1s"
        />

        <FrontFeatureBox
          title="Real-time Messaging & Video"
          description="Keep your audience engaged with integrated real-time messaging and video conferencing powered by WebRTC. From customer support to personal consultations, communicate without limits."
          icon="mdi:message-video"
          delay=".15s"
        />

        <FrontFeatureBox
          title="AI-Powered Insights"
          description="Use AI-powered tools to analyze visitor behavior, automate workflows, and boost productivity. Predict trends, get actionable insights, and optimize your business effortlessly."
          icon="mdi:brain"
          delay=".2s"
        />

        <FrontFeatureBox
          title="Modular Design System"
          description="Design every element of your website exactly how you want. Our modular design system offers flexibility, allowing you to create pages, forms, and sections with minimal effort."
          icon="mdi:view-grid-plus"
          delay=".25s"
        />

        <FrontFeatureBox
          title="Secure Communication & Data Privacy"
          description="Built with end-to-end encryption, our platform ensures your communications and data are secure. Whether chatting with clients or storing sensitive information, your privacy is our priority."
          icon="mdi:shield-lock"
          delay=".3s"
        />

        <FrontFeatureBox
          title="Built-in Content Management"
          description="Manage your website content efficiently using our integrated, headless CMS. Write blogs, update product pages, or publish news articles with just a few clicks using Markdown support."
          icon="mdi:content-save"
          delay=".35s"
        />

        <FrontFeatureBox
          title="Multi-language & Localization"
          description="Reach global audiences with built-in localization support. Easily create multi-language websites and deliver personalized experiences for users around the world."
          icon="mdi:translate"
          delay=".4s"
        />

        <FrontFeatureBox
          title="Scalable and Future-Proof"
          description="Our platform is designed to grow with you. Whether you're a small business or an enterprise, leverage the latest technologies like Cloudflare, KV, D1, and Durable Objects to stay ahead."
          icon="mdi:cloud-outline"
          delay=".45s"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
