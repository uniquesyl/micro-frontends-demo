module.exports = {
  chainWebpack: config => {
    config.devServer.set('inline', false)
    config.devServer.set('hot', true)
    config.devServer.set('headers', {"Access-Control-Allow-Origin":"*"})
    // Vue CLI 4 output filename is js/[chunkName].js, different from Vue CLI 3
    // More Detail: https://github.com/vuejs/vue-cli/blob/master/packages/%40vue/cli-service/lib/config/app.js#L29
    if (process.env.NODE_ENV !== 'production') {
      config.output.filename(`[name].js`)
    }
    config.externals(['vue', 'vue-router'])
  },
  filenameHashing: false
}