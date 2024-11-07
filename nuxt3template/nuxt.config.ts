// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css:[
    'element-plus/dist/index.css',
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@pinia/nuxt']
})
