import {binder, dataset, view, ViewGroup, StaticViewGroup} from "adajs";
import MixTable from "./mix";
import FlipService from "./states/flip";

@view({
    className: "filptable",
    template: "./template/fliptable.html",
    style: "./style/fliptable.scss",
    dataset: {
        service: FlipService
    }
})
class Table extends ViewGroup {

    onready() {
        this.gotoPage(1);
    }

    gotoPage(page) {
        this.getDataSet().commit("goto", page);
    }

    tags() {
        return {
            thistable: MixTable
        }
    }

    @binder("nextpage")
    nextPage() {
    }

    @binder("prevpage")
    prevPage() {
    }

    @binder("goto")
    goto({page}) {
        this.gotoPage(page.num);
    }

    @binder("actionBtn")
    actionBtn({btn}) {
        this.dispatchEvent("actionBtn", btn);
    }
}

export default Table;