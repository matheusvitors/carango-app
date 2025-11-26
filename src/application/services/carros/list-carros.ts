import { http, httpErrorHandler } from "@/infra/adapters";
import { ENDPOINT } from "@/infra/config/endpoints";

export const listCarros = async () => {
	try {
		const response = await http.get(`${ENDPOINT.CARROS}`);
		return response.data.response.content;
	} catch (error: any) {
		// console.error('listCarros', error.message);
		throw httpErrorHandler(error, 'authenticate');
	}
};
