const Router = require("koa-router");
const router = new Router();

router.get('/get', ({ response, service }) => {
    return service.get('/app-service-taskflow/set').then(a => {
        response.body = a;
    }).catch(e => {
        response.body = e;
    });
});

module.exports = router;