const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/HongHe/'
  }
} : {}
export default {
  target: 'static',
    ...routerBase,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '浤賀有限公司 | HongHe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'Keywords', content: '浤賀,浤賀有限公司,HongHe,蔬菜貿易,雲林,雲林蔬果批發,雲林蔬果進口,雲林農產品,蔬果批發,蔬果進口,大白菜,白蘿蔔,高麗菜,青花菜,美生菜,南瓜,健康,效率,永續經營'},
      { name: 'Description', content: '浤賀有限公司 | HongHe 蔬菜貿易、蔬果批發、蔬果進口、農產品買賣，商品大白菜、白蘿蔔、高麗菜、青花菜、美生菜、南瓜，公司主旨健康、效率、永續經營' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://raw.githubusercontent.com/dwm331/HongHe/main/static/img/logo.jpeg' },
      { property: 'og:title', content: '浤賀有限公司 | HongHe 蔬菜貿易、蔬果批發、蔬果進口、健康' },
      { property: 'og:description', content: '浤賀有限公司 | HongHe 蔬菜貿易、蔬果批發、蔬果進口、農產品買賣，商品大白菜、白蘿蔔、高麗菜、青花菜、美生菜、南瓜，公司主旨健康、效率、永續經營' },
      { property: 'og:url', content: 'https://dwm331.github.io/HongHe/' },
      { name: 'google-site-verification', content: 'XcnBcvJXnhxMKG5AoFu9t_vXLBirG4kVOgXr-tXRm1c' },
      { name: 'msvalidate.01', content: '6C6978AE2A09447984DC766D7968AF93' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/jpeg', href: 'https://raw.githubusercontent.com/dwm331/HongHe/main/static/img/logo.jpeg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
        { src: '~/plugins/vue-fb-customer-chat.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
