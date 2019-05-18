const { Controller } = require("ada-cloud-util/boost");

class TestController extends Controller {
    static configure = {
        basePath: "/user",
        actions: {
            get: { path: "/user" },
            login: { path: "/login" },
            getList: { path: "/list" },
            add: { path: "/add", method: 'post' }
        }
    }

    get() {
        return this.service.get('/app-service-taskflow/set');
    }

    login({ request }) {
        return this.service.get('/app-service-uc/login', request.query);
    }

    getList() {
        return this.service.get('/app-service-uc/user/list');
    }

    add({ request }) {
        let body = request.body;
        return this.service.post('/app-service-uc/user/add', body);
    }
}

module.exports = TestController;