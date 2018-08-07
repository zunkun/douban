module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.douban.com/v2',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/rex_api': {
        target: 'https://m.douban.com/rexxar/api/v2',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/rex_api': ''
        }
      }
    },
  }
}