import { jwtDecode } from "jwt-decode"

export interface JwtPayload {
		id: string;
		auth: boolean;
}

export interface JwtData {
	iss: string;
	iat: number;
	exp: number;
	nbf: number;
	jti: string;
	sub: any;
	prv: string;
	payload: JwtPayload;
}

export const jwt = (token: string): JwtPayload => {
	try {
		console.log('jwt', jwtDecode<JwtData>(token));

		return jwtDecode<JwtData>(token).payload;
	} catch (error) {
		console.error('jwt', error);
		//TODO: adaptar os erros para seguir a doc do JwtDecode -> https://www.npmjs.com/package/jwt-decode
		throw error;
	}
}
