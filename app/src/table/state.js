import { Service, action } from "adajs";

class TableService extends Service {
	defaultData() {
		return {
			list: []
		};
	}

	onupdate(current, data) {
		return this.request.get('/user/list').then(({ data }) => {
			Object.assign(current, { list: data });
		});
	}

	@action('get')
	get(current) {
		return this.request.get('/user/list').then(({ data }) => {
			console.log(data);
			Object.assign(current, { list: data });
		});
	}
}

export default TableService;