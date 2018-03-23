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
      { hid: 'description', name: 'description', content: 'This free service is provided by Code for Atlanta and Atlanta Legal Aid Society.' },
      { vmid: 'og:title', property: 'og:title', content: 'Fulton County Homestead Exemption Application'},
      { vmid: 'og:description', property: 'og:description', content: 'This free service is provided by Code for Atlanta and Atlanta Legal Aid Society.'},
      { vmid: 'og:type', property: 'og:type', content: 'website'},
      { vmid: 'og:url', property: 'og:url', content: 'https://www.fultonhomestead.org'},
      { vmid: 'og:image', property: 'og:image', content: 'https://www.fultonhomestead.org/share-image.jpg'},
      { vmid: 'twitter:card', property: 'twitter:card', content: 'summary'},
      { vmid: 'twitter:site', property: 'twitter:site', content: '@codeforatlanta'},
      { vmid: 'twitter:title', property: 'twitter:title', content: 'Fulton County Homestead Exemption Application'},
      { vmid: 'twitter:description', property: 'twitter:description', content: 'This free service is provided by Code for Atlanta and Atlanta Legal Aid Society.'},
      { vmid: 'twitter:image', property: 'twitter:image', content: 'https://www.fultonhomestead.org/share-image.jpg'},
      { vmid: 'twitter:image_alt', property: 'twitter:image_alt', content: 'Screenshot of FultonHomestead.org'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/node_modules/uswds/src/stylesheets/_all.scss'
  ],
  modules: [
    'nuxt-sass-resources-loader',
    ['@nuxtjs/google-analytics', {id: 'UA-116321306-1'}]
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
