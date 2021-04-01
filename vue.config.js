module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: ' @import "./src/assets/styles.scss"; '
      }
    }
  }
}
