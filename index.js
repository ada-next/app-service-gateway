const Server = require("ada-cloud-hub/boot");
const { Boost } = require("ada-cloud-util/boost");
const static = require('koa-static');

let server = new Server();
server.use(static(__dirname + './dist'));
server.startup();

module.exports = server;