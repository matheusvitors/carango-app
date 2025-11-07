import { http, httpErrorHandler } from "@/infra/adapters";
import { ENDPOINT } from "@/infra/config/endpoints";

export const listCarros = async (userId: string) => {
	try {
		const response = await http.get(`${ENDPOINT.CARROS}/${userId}`)
	} catch (error) {
		console.error('listCarros', error);
		throw httpErrorHandler(error, 'authenticate');
	}
};
