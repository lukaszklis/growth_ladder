import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  bridge: {
    nitro: false,
  },
  css: ["~/assets/index.scss"],
});
