module.exports = {
    publicPath: "./", // 基本路径
    outputDir: "dist", // 构建时的输出目录
    assetsDir: "static", // 放置静态资源的目录
    indexPath: "index.html", // html的输出路径
    devServer: {
      open: true,
      host: 'localhost',
      port: 8080,
      proxy: {
        // 配置跨域
        '/api': {
          target: 'http://localhost:8080',
          pathRewrite: {
            '^/api': './json'
          }
        }
      },
    }
  };
  