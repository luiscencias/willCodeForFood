const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  let port_number = 8081;
  app.use(proxy('/api', { target: 'http://[::1]:'+ port_number}));
}