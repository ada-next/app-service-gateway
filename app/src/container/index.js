import { view, BondViewGroup, binder } from "adajs";
import ContainerService from "./state.js";
import Table from './../table';

@view({
    className: "container",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: ContainerService
    }
})
class Container extends BondViewGroup {
    tags() {
        return { user_table: Table }
    }

    @binder("addUser")
    addUser() {
        let username = this.finder("username").getElement().value,
            password = this.finder("password").getElement().value;
        this.context.request.post('/user/add', { username, password });
    }
}

export default Container;