import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { httpErrorHandler, storage } from "@/infra/adapters";
import { KEY } from "@/infra/config";
import { Credentials } from "@/application/interfaces";
import { authenticate } from "@/application/services";

interface AuthContextProps {
	token: string | null;
	isAuthenticated: boolean;
	login: (credentials: Credentials) => Promise<void>;
	logout: () => Promise<void>;
}

const DEFAULT_VALUES: AuthContextProps = {
	token: null,
	isAuthenticated: false,
	login: async (credentials: Credentials) => { console.log('nops')},
	logout: async () => {},
};

const AuthContext = createContext<AuthContextProps>(DEFAULT_VALUES);

export const AuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [token, setToken] = useState<string | null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		verifyAuthentication();
	}, []);

	const verifyAuthentication = async () => {
		try {
			const credentials = await storage.get(KEY.CREDENTIALS);
			const hasToken = await verifyToken();
			const isAuthenticated = (credentials && hasToken) || false;
			setIsAuthenticated(isAuthenticated);
			return isAuthenticated;
		} catch (error) {
			console.error("AuthContext - verifyCredentials", error);
			throw error;
		}
	};

	const verifyToken = async () => {
		try {
			const token = await storage.get(KEY.TOKEN);
			setToken(token);
			return token ? true : false;
		} catch (error) {
			console.error("AuthContext - verifyToken", error);
			throw error;
		}
	};

	const login = async (credentials: Credentials) => {
		try {
			console.log(credentials);

			const token = await authenticate(credentials);
			console.log({token});

			setToken(token);
			setIsAuthenticated(true);
			// queryClient.removeQueries();
		} catch (error) {
			throw httpErrorHandler(error, "AuthContext - Login");
		}
	};

	const logout = async () => {
		try {
			await storage.remove(KEY.TOKEN);
			await storage.remove(KEY.CREDENTIALS);
			setToken(null);
			setIsAuthenticated(false);
		} catch (error) {
			console.error("AuthContext - logout", error);
			throw error;
		}
	};

	return (<AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>{children}</AuthContext.Provider>);
};

export const useAuthentication = () => {
	return useContext(AuthContext);
};
