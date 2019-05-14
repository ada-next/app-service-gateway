const { Controller } = require("ada-cloud-util/boost");

class TestController extends Controller {
    static configure = {
        actions: {
            get: { path: "/get" },
            login: { path: "/login" }
        }
    }

    get({ service }) {
        return service.get('/app-service-taskflow/set').then(a => {
            return this.success(a);
        });
    };

    login({ service, request }) {
        return service.get('/app-service-uc/login', request.query).then(a => {
            return this.success(a);
        });
    };
}

module.exports = TestController;