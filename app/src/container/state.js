import {Service, action} from "adajs";
import logo from "./images/ada.icon";

class ContainerService extends Service {
    defaultData() {
        return {
            logo,
            menu: [],
            current: null,
            loginDone: false
        };
    }

    onupdate(current, data) {
        Object.assign(current, data);
    }

    @action("open")
    open(current, item) {
        return import(item.type).then(type => {
            current.current = {type, title: item.title};
        });
    }

    @action("loginDone")
    loginDone(current) {
        current.loginDone = true;
    }
}

export default ContainerService;