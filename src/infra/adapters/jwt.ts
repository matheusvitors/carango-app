import { jwtDecode } from "jwt-decode"

export interface JwtData {
	iss: string
	iat: number
	exp: number
	nbf: number
	jti: string
	sub: any
	prv: string
	no_usuario: string
	ds_username_usuario: string
	ds_email_usuario: string
	ds_setor_usuario: any
	secsubsec_usuario: string
	primary_key: number
}

export const jwt = (token: string): JwtData => {
	try {
		return jwtDecode<JwtData>(token);
	} catch (error) {
		console.error('jwt', error);
		//TODO: adaptar os erros para seguir a doc do JwtDecode -> https://www.npmjs.com/package/jwt-decode
		throw error;
	}
}
