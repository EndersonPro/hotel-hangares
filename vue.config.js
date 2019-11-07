module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  publicPath: '/',

  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
