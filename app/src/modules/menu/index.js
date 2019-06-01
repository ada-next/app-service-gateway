import { view, View, binder } from "adajs";
import MenuService from "./state.js";

@view({
    className: "admin-menu",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: MenuService
    }
})
class Menu extends View {
    onready() {
        this.action({ item: this.getCurrentState().list[0] });
    }

    @binder("action")
    action({ item }) {
        if (item.action === "open") {
            this.commit("active", item).then(() => {
                this.dispatchEvent("open", item);
            });
        } else {
            this.dispatchEvent(item.action, item);
        }
    }
}

export default Menu;