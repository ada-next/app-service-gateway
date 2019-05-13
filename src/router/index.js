const Router = require("koa-router");
const router = new Router();

router.get('/get', ({ response, service }) => {
    return service.get('/app-service-taskflow/set').then(a => {
        response.body = a;
    }).catch(e => {
        response.body = e;
    });
});

router.get('/login', ({ response, service, request }) => {
    return service.get('/app-service-uc/login', request.query).then(a => {
        response.body = a;
    }).catch(a => {
        response.body = a;
    });
});

module.exports = router;