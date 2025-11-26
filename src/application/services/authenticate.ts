import { Credentials } from "@/application/interfaces";
import { http, storage, httpErrorHandler } from "@/infra/adapters";
import { KEY } from "@/infra/config";

interface Tokens {
	token: string;
	refreshToken: string;
}

export const authenticate = async (credencials: Credentials): Promise<Tokens> => {
	try {
		const response = await http.post('/login', credencials);

		await storage.set(KEY.TOKEN, { data: response.data.response.content.token });
		await storage.set(KEY.REFRESH_TOKEN, { data: response.data.response.content.refreshToken });
		await storage.remove(KEY.CREDENTIALS);
		await storage.set(KEY.CREDENTIALS, { data: credencials });

		return response.data.response.content;

	} catch (error: any) {
		console.error('authenticate', error);
		throw httpErrorHandler(error, 'authenticate');
	}
}
