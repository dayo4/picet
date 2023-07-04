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
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ]
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
    // "aos/dist/aos.css",
  ],
  runtimeConfig: {
    public: {
      //
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
    prerender: {
      crawlLinks: true,
      //   routes: ['/user/1', '/user/2'],
      // ignore: ['/dynamic']
    },
  },
  // modules: ["@nuxtjs/apollo"],
  // apollo: {
  //   clients: {
  //     default: {
  //       // httpEndpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.NUXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`,
  //       httpLinkOptions: {
  //         headers: {
  //           // authorization: `Bearer ${process.env.NUXT_PUBLIC_CONTENTFUL_DELIVERY_KEY}`,
  //         },
  //       }
  //     },
  //   },
  // },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
