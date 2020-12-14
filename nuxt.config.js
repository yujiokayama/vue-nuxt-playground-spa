require('dotenv').config()
const { API_KEY, WRITE_API_KEY } = process.env

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'vue-nuxt-playground',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    {
      src: '~/assets/styles/scss/tailwind.scss',
      lang: 'scss',
    },
    {
      src: '~/assets/styles/scss/index.scss',
      lang: 'scss',
    },
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/main.js',
      mode: 'client', // client or server
    },
    {
      src: '~/plugins/api.js',
      mode: 'client', // client or server
    },
    {
      src: '~/plugins/axios.js',
      mode: 'client', // client or server
    },
    {
      src: '~/plugins/highcharts-vue.js',
      mode: 'client', // client or server
    },
    {
      src: '~/plugins/vue-codemirror.js',
      mode: 'client', // client or server
    },
    {
      src: '~/plugins/vue-content-loader.js',
      mode: 'client', // client or server
    },
    {
      src: '~/plugins/vuejs-tree.js',
      mode: 'client', // client or server
    },
  ],

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-router
  router: {
    middleware: [],
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  watchers: {
    webpack: {
      poll: true,
    },
  },
  env: {
    API_KEY,
    WRITE_API_KEY,
  },
}
