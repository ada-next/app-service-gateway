const Server = require("ada-cloud-boot");
const router = require("./src/router");
const static = require('koa-static');

let server = new Server();
server.use(static(__dirname + './dist'));
server.use(router.routes());
server.on('started', () => {
});
server.startup().catch((e) => {
    console.log('--->done',e);
});