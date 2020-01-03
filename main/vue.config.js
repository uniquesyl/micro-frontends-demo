const path = require('path')
const env = process.env.NODE_ENV
module.exports = {
  configureWebpack: config => {
    config.output.library = 'main'
    config.output.libraryTarget = 'amd'
    config.output.filename = `[name].js`
    config.entry = { app: ['./src/main.js'],store:'./src/store.js' }
    config.externals = ['vue', 'vue-router']
    if (env === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  // 关闭hash
  filenameHashing: false,
  // 关闭map
  productionSourceMap: false,
  devServer: {
    inline: false,
    hot: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  }
}