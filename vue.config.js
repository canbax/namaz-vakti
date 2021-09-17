module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  pwa: {
    name: "namaz-vakti",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    // configure the workbox plugin
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      exclude: [/.well-known/]
    }

  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/namaz-vakti/'
    : '/'
}
