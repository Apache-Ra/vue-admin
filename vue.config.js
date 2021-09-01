const resolve = dir => require('path').join(__dirname, dir)
module.exports = {
  publicPath: './',
  outputDir: process.env.NODE_ENV + '-dev',
  assetsDir: '',
  indexPath: 'index.html',
  productionSourceMap: process.env.NODE_ENV === 'test',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8080,
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
