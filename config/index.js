module.exports = {
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  proxyTable: {
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
  douban: {
    headers: {
      Origin: 'https://m.douban.com/',
      Host: 'm.douban.com',
      Connection: 'keep-alive',
      Accept: '*/*',
      'X-Requested-With': 'XMLHttpRequest',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.84 Safari/537.36',
      Referer: 'https://m.douban.com/',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    },
    baseUri: {
      v2: 'http://api.douban.com/v2',
      rexxar: 'https://m.douban.com/rexxar/api/v2'
    }
  }
}