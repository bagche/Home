// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
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
    build: {
      sourcemap: false,
      minify: true,
      rollupOptions: { treeshake: true },
    },
  },
});