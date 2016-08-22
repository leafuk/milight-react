var server = require('pushstate-server');

server.start({
  port: 5000,
  directory: './build',
  file: '/index.html'
});
