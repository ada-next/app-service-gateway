import { root, StaticViewGroup } from "adajs";
import Test from "./test";

@root()
class Root extends StaticViewGroup {
    onready() {
        this.addChild(Test);
    }
}

export default Root;