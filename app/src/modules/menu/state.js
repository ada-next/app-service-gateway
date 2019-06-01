import {Service, action} from "adajs";

class MenuService extends Service {
    defaultData() {
        return {
            list: []
        };
    }

    onupdate(current, data) {
        Object.assign(current, data);
    }

    @action("active")
    active(current, item) {
        current.list.forEach(a => {
            a.active = a.title === item.title;
        })
    }
}

export default MenuService;