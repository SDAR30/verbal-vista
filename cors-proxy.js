const cors_anywhere = require('cors-anywhere');
const host = 'localhost';
const port = 8080;

cors_anywhere.createServer({
  originWhitelist: [], // Allow all origins
  removeHeaders: [
    'cookie',
    'cookie2',
    'x-request-start',
    'x-request-id',
    'via',
    'connect-time',
    'total-route-time',
    'proxy-authorization',
    'access-control-allow-origin',
  ],
}).listen(port, host, function () {
  console.log('CORS Anywhere proxy running on ' + host + ':' + port);
});
