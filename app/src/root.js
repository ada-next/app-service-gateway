import { root, StaticViewGroup } from "adajs";
import Container from "./container";

@root()
class Root extends StaticViewGroup {
    onready() {
        this.addChild(Container);
    }
}

export default Root;