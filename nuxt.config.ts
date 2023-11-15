export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: process.env.PUBLIC_API_BASE
    }
  },


  modules: ["@nuxtjs/tailwindcss"]
})