const resolve = require('path').resolve;

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Fulton County Homestead Exemption Application',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Fulton County Homestead Exemption Application' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/node_modules/uswds/src/stylesheets/_all.scss'
  ],
  modules: [
    'nuxt-sass-resources-loader'
  ],
  sassResources: [
    resolve(__dirname, 'node_modules/uswds/src/stylesheets/lib/_bourbon.scss'),
    resolve(__dirname, 'node_modules/uswds/src/stylesheets/core/_variables.scss')
  ],
  plugins: [
    { src: '~/plugins/vue-cookie', ssr: false },
    { src: '~/plugins/vee-validate' }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['vue-cookie', 'vee-validate']
  }
}
