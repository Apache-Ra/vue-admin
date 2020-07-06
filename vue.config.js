module.exports = {
    // 部署应用包时的基本 URL
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    // 生产环境构建文件的目录
    outputDir: process.env.NODE_ENV + '-dev',
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: '',
    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
    indexPath: 'index.html',
    // 如果不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    productionSourceMap: true,
    // 生产构建时禁用 eslint-loader
    lintOnSave: process.env.NODE_ENV !== 'prod',
    devServer: {
        // 编译完成是否打开网页
        open: false,
        // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
        host: '0.0.0.0',
        // 访问端口
        port: 8080,
        // 编译失败时刷新页面
        https: false,
        // 开启热加载
        hot: true,
        hotOnly: false,
        // 浏览器 overlay 同时显示警告和错误
        overlay: {
            warnings: true,
            errors: true
        },
        // 跨域
        proxy: {
            '/api': {
                target: '',
                changeOrigin: true,
                pathRewrite: {"^/api": ""}
            },
        },
    }
}
