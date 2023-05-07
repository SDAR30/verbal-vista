const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api_v0',
    createProxyMiddleware({
      target: 'https://tatoeba.org',
      changeOrigin: true,
      pathRewrite: {
        '^/api_v0': '/eng/api_v0',
      },
    })
  );
};
