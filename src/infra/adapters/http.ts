import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { storage } from "@/infra/adapters";
import { API_URL } from "@/infra/config/environment";
import { KEY } from "@/infra/config/storage-keys";
import { authenticate } from "@/application/services";

console.info('API URL', API_URL);

export const http = axios.create({
	baseURL: API_URL,
	timeout: 5000
});

http.interceptors.request.use(async (config) => {
	if (config.url !== "/login") {
		let token = await storage.get(KEY.TOKEN);

		config.headers = config.headers || {};
		config.headers.Authorization = token ? `Bearer ${token}` : "";
	}

	return config;
});

// let isRefreshing = false;
// const requestsQueue: any[] = [];

// const processQueue = (error: any, token: string | null = null) => {
// 	requestsQueue.forEach((promise: any) => {
// 		if(error){
// 			promise.reject(error);
// 		} else if(token) {
// 			promise.resolve(token);
// 		}
// 	})
// }

// http.interceptors.response.use(
// 	(response) => {
// 		return response;
// 	},
// 	async (error: AxiosError | Error): Promise<AxiosError | null> => {
// 		if (axios.isAxiosError(error)) {

// 			const { message } = error;
// 			const { method, url } = error.config as AxiosRequestConfig;
// 			const { status } = (error.response as AxiosResponse) ?? {};

// 			console.info(`[API] ${method?.toUpperCase()} ${url} | Error ${status} ${message}`);

// 			const originalRequest = error.config as AxiosRequestConfig ?? {};

// 			if(error.response?.status === 401 && error.response?.data.error !== 'Invalid credentials') {

// 				if(isRefreshing) {
// 					new Promise((resolve, reject) => {
// 						requestsQueue.push({ resolve, reject });
// 					})
// 					.then(token => {
// 						originalRequest.headers!.Authorization = `Bearer ${token}`;
// 						return axios(originalRequest);
// 					})
// 					.catch(error => {
// 						return Promise.reject(error);
// 					})
// 				}

// 				//refreshing token
// 				isRefreshing = true;
// 				try {
// 					const credentials = await storage.get(KEY_CREDENTIALS);

// 					if(credentials) {
// 						const token = await authenticateUser(credentials);
// 						await storage.set(KEY_TOKEN, { data: token });
// 						originalRequest.headers!.Authorization = `Bearer ${token}`;

// 						processQueue(null, token);

// 						return axios(originalRequest);
// 					}
// 				} catch (error) {
// 					Promise.reject(error)
// 				} finally {
// 					isRefreshing = false;
// 				}
// 			}

// 			if(error.response?.data.error === 'Invalid credentials') {
// 				await storage.remove(KEY_CREDENTIALS);
// 			}

// 			if(error.response?.status === 500 && error.message === 'Network Error' && error.response?.data) {
// 				return Promise.resolve(null);
// 			}
// 		}

// 		return Promise.reject(error);
// 	}
// );

http.interceptors.response.use(
	(response) => {
		return response;
	},

	async (error: AxiosError | Error): Promise<AxiosError> => {
		if (axios.isAxiosError(error)) {
			const originalRequest = error.config as AxiosRequestConfig ?? {}

			const { message } = error;
			const { method, url } = error.config as AxiosRequestConfig;
			const { statusText, status } = (error.response as AxiosResponse) ?? {};

			console.info(`[API] ${method?.toUpperCase()} ${url} | Error ${status} ${message}`);

			if(error.response?.status === 401) {
				try {
					const credentials = await storage.get(KEY.CREDENTIALS);
					if(credentials) {
						const token = await authenticate(credentials);
						if (error.config) {
							error.config.headers.Authorization = token;
						}
					}
					// await refreshToken();
					return error.config ? axios(error.config) : Promise.reject(error);

				} catch (error) {
					Promise.reject(error)
				}
			}
		}
		return Promise.reject(error);
	}
);
