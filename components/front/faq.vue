<template>
  <section
    id="faq"
    class="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]"
  >
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div class="mx-auto mb-[60px] max-w-[520px] text-center">
            <span class="mb-2 block text-lg font-semibold text-ultramarine-500">
              FAQ
            </span>
            <h2
              class="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-ultramarine-500 sm:text-4xl md:text-[40px]"
            >
              Any Questions? Look Here
            </h2>
            <p
              class="mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6"
            >
              Find answers to the most common questions about our platform.
            </p>
          </div>
        </div>
      </div>
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4 lg:w-1/2">
          <!-- Existing FAQ Items -->
          <FrontFaqItem
            question="Is the platform well-documented?"
            answer="Yes, our platform comes with comprehensive documentation to help you get started quickly."
          />
          <FrontFaqItem
            question="How long does it take to set up my first project?"
            answer="It takes approximately 2-3 weeks to get your first project ready, including in-depth research and strategy planning."
          />
          <!-- New FAQ Items -->
          <FrontFaqItem
            question="Can I migrate my existing website to your platform?"
            answer="Yes, you can migrate your existing website to our platform. Our support team can assist you with the migration process to ensure a smooth transition."
          />
          <FrontFaqItem
            question="Do you offer templates or themes?"
            answer="Absolutely! We provide a variety of professionally designed templates and themes that you can customize to fit your brand."
          />
          <FrontFaqItem
            question="Is there a limit to the number of users or collaborators?"
            answer="Depending on your subscription plan, you can add multiple collaborators to your projects. Our Business and Enterprise plans offer expanded collaboration features."
          />
        </div>
        <div class="w-full px-4 lg:w-1/2">
          <!-- Existing FAQ Items -->
          <FrontFaqItem
            question="Do I need coding skills to use the platform?"
            answer="No, our platform is designed for users without coding experience. You can build and customize your website using our intuitive drag-and-drop interface."
          />
          <FrontFaqItem
            question="Can I integrate third-party tools and services?"
            answer="Absolutely! We offer seamless integrations with various third-party tools and services to enhance your website's functionality."
          />
          <!-- New FAQ Items -->
          <FrontFaqItem
            question="How secure is my data on your platform?"
            answer="We take data security very seriously. Our platform uses industry-standard encryption and security protocols to protect your data."
          />
          <FrontFaqItem
            question="What kind of support do you offer?"
            answer="We offer 24/7 customer support through live chat and email. Our support team is always ready to assist you with any questions or issues."
          />
          <FrontFaqItem
            question="Is there a trial period or free plan available?"
            answer="Yes, we offer a Free plan that allows you to explore our platform's basic features. You can upgrade at any time to access more advanced features."
          />
        </div>
      </div>
    </div>
    <!-- Your existing decorative elements remain unchanged -->
  </section>
</template>
