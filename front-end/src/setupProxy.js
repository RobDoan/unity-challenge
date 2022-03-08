const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/api', '/uploads'],
    createProxyMiddleware({
      target: 'http://localhost:4000',
      pathRewrite: {
        '^/api': '/',
      },
      changeOrigin: true,
    })
  )
};
