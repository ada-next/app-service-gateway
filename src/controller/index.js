const { Controller } = require("ada-cloud-util/boost");

class TestController extends Controller {
    static configure = {
        actions: {
            get: { path: "/get" },
            login: { path: "/login" }
        }
    }

    get({ service }) {
        return service.get('/app-service-taskflow/set');
    };

    login({ service, request }) {
        return service.get('/app-service-uc/login', request.query);
    };
}

module.exports = TestController;