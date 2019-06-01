import { view, BondViewGroup, handler, binder } from "adajs";
import ContainerService from "./state.js";

@view({
    className: "admin-container",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: ContainerService
    }
})
class Container extends BondViewGroup {
}

export default Container;