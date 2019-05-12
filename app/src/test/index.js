import {view,View} from "adajs";
import TestService from "./state.js";

@view({
    className:"test",
    template:"./template.html",
    style:"./style.scss",
    dataset:{
    	service:TestService
    }
})
class Test extends View{
}

export default Test;