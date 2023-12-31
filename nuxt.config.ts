// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Picet",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  ssr: true,

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                    @import "~/globalStyles/devOnly/_variables.scss";
                    @import "~/globalStyles/devOnly/_mixins.scss";
                    @import "~/globalStyles/devOnly/theme/main.scss";
                    `,
        },
      },
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/globalStyles/deploy/general.scss",
    "~/globalStyles/deploy/logo.scss",
    "~/globalStyles/deploy/transitions.css",

    "~/globalStyles/deploy/theme/main.scss",
    "~/assets/css/main.css",
    // "aos/dist/aos.css",
  ],
  runtimeConfig: {
    public: {
      openaiApiKey: process.env.NUXT_PUBLIC_OPENAI_API_KEY
    },
  },
  plugins: [
    //
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  nitro: {
    // prerender: {
    //   crawlLinks: true,
    // },
  },
  modules: ["nuxt-headlessui"],
  // headlessui: {
  //   prefix: "Hui",
  // },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
