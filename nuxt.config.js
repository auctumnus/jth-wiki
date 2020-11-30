const name = 'Jotunnheim Wiki'
const description = 'A wiki for the Jotunnheim conworld.'
const themeColor = '#93032E'

export default {
  ssr: false,
  target: 'static',
  head: {
    title: name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md' && Array.isArray(document.tags)) {
        document.tagsList = document.tags.join(', ')
      }
    },
  },
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-fonts',
      {
        display: 'swap',
        families: {
          Inter: {
            wght: [400, 600, 700],
          },
        },
      },
    ],
    '@nuxtjs/color-mode',
  ],
  plugins: [
    '@/plugins/vue-scrollactive.js',
    '@/plugins/vue-debounce.js',
    '@/plugins/event-bus.js',
  ],
  modules: ['@nuxtjs/pwa', '@nuxt/content'],
  content: {
    fullTextSearchFields: ['title', 'tagsList', 'slug'],
  },
  build: {
    postcss: {
      preset: {
        features: {
          'focus-within-pseudo-class': false,
        },
      },
    },
  },
  pwa: {
    icon: {
      sizes: [64, 120, 144, 152, 192, 384, 400],
      purpose: ['any'],
    },
    manifest: {
      name: name,
      short_name: 'JTH Wiki',
      description: description,
      lang: 'en',
      dir: 'ltr',
      display: 'browser',
    },
    meta: {
      nativeUI: true,
      author: 'Jotunnheim Wiki contributors',
      theme_color: themeColor,
    },
  },
  colorMode: {
    classSuffix: '',
  },
}
