import { view, View } from "adajs";
import TableService from "./state.js";

@view({
    className: "table",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: TableService
    }
})
class Table extends View {
    onready() {
        this.commit('get');
    }
}

export default Table;