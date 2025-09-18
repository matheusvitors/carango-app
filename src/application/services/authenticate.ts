import { Credentials } from "@/application/interfaces";
import { http, storage, httpErrorHandler } from "@/infra/adapters";
import { KEY } from "@/infra/config";

export const authenticate = async (credencials: Credentials) => {
	try {
		const response = await http.post<{token: string;}>('/login', credencials);

		await storage.set(KEY.TOKEN, { data: response.data.token });
		await storage.remove(KEY.CREDENTIALS);
		await storage.set(KEY.CREDENTIALS, { data: credencials });

		return response.data.token;

	} catch (error: any) {
		console.error('authenticate', error);
		throw httpErrorHandler(error, 'authenticate');
	}
}
