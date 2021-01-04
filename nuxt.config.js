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
    // 外部リソースもここで読み込む
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons',
      },
    ],
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

  // カスタムローダー
  loading: '~/components/test/modules/LoadingBar.vue',

  // SPAモードでの初回ロード＆リロード時のローダー
  loadingIndicator: {
    name: '~/template/spa-loading.html',
  },

  // SCSSの変数を展開し、全ページから参照できるようにする
  styleResources: {
    scss: ['~/assets/styles/scss/variables/_color.scss'],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/main.js',
      mode: 'client', // client or server
    },
    {
      src: '~/plugins/common.js',
      mode: 'client', // client or server
    },
    {
      src: '~/plugins/vue-material.js',
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
      src: '~/plugins/vue-quill-editor.js',
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
    '@nuxtjs/style-resources',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-webfontloader',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  webfontloader: {
    google: {
      families: ['Noto+Sans+JP:400,700'],
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        autoprefixer: { grid: 'autoplace' },
      },
    },
  },

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
