import {Service} from "adajs";

class TestService extends Service{
	defaultData(){
		return {};
	}

	onupdate(current,data){
		Object.assign(current,data);
	}
}

export default TestService;