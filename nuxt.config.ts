// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  runtimeConfig: {
    ownersPub: "",
    inboxPriv: "",
    openaiToken: "",
    aiToken: "",
    clAccountId: "",
    githubClientId: "",
    githubToken: "",
    githubRepo: "",
  },

  modules: ["@nuxt/ui"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
        },
      },
    },
    // plugins: [viteCompression({ algorithm: "brotliCompress" })],
    // build: {
    //   sourcemap: false,
    //   minify: true,
    //   rollupOptions: { treeshake: true },
    // },
  },
  nitro: {
    preset: "cloudflare-pages",
    compressPublicAssets: true,
    minify: true,
  },
  colorMode: {
    preference: "light",
  },
});
