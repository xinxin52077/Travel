module.exports = {
    devServer: {
      open: true,
      host: 'localhost',
      port: 8080,
      proxy: {
        // 配置跨域
        '/api': {
          target: 'http://localhost:8080',
          pathRewrite: {
            '^/api': '/json'
          }
        }
      },
    }
  };
  