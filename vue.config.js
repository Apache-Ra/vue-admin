/**
 *   自定义配置
 *   2020-07-07
 *   dong.18@foxmail.com
 **/
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: process.env.NODE_ENV + '-dev',
  assetsDir: '',
  indexPath: 'index.html',
  productionSourceMap: true,
  // css: {
  //   extract: true,
  //   sourceMap: false,
  //   loaderOptions: {},
  //   modules: false
  // },
  lintOnSave: process.env.NODE_ENV !== 'prod',
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8084,
    https: false,
    hot: true,
    hotOnly: false,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://0.0.0.0',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
