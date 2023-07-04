// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Orbrift",
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
    "~/globalStyles/deploy/myCssLibrary/greycore.css",
    "~/globalStyles/deploy/icons/css/fontello.css",
    "~/globalStyles/deploy/general.scss",
    "~/globalStyles/deploy/logo.scss",
    "~/globalStyles/deploy/transitions.css",

    "~/globalStyles/deploy/theme/main.scss",
    "aos/dist/aos.css",
  ],
  runtimeConfig: {
    public: {
      contentfulSpaceId: process.env.NUXT_PUBLIC_CONTENTFUL_SPACE_ID,
      contentfulDeliveryKey: process.env.NUXT_PUBLIC_CONTENTFUL_DELIVERY_KEY,
      contentfulPreviewKey: process.env.NUXT_PUBLIC_CONTENTFUL_PREVIEW_KEY,
    },
  },
  plugins: [
    // "~/plugins/navs/index.ts"
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
  // modules: [
  // https://go.nuxtjs.dev/axios
  // '@nuxtjs/axios',
  // ['@pinia/nuxt', {
  //     autoImports: [
  //         // automatically imports `defineStore`
  //         'defineStore',
  //     ]
  // }
  // ]
  // ],
  modules: ["@nuxtjs/apollo"],
  apollo: {
    clients: {
      default: {
        httpEndpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.NUXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`,
        httpLinkOptions: {
          headers: {
            authorization: `Bearer ${process.env.NUXT_PUBLIC_CONTENTFUL_DELIVERY_KEY}`,
          },
        }
      },
      preview: {
        httpEndpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.NUXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`,
        httpLinkOptions: {
          headers: {
            authorization: `Bearer ${process.env.NUXT_PUBLIC_CONTENTFUL_PREVIEW_KEY}`,
          },
        },
      },
    },
  },
  // build: {},
  // loading: '~/components/GlobalComponents/notification/Loading.vue',
});
