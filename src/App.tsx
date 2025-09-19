import React from "react";
import { AuthContextProvider, SnackbarContextProvider, SystemThemeProvider } from "@/ui/contexts";
import { Router } from "@/Router";

export const App: React.FC = () => {
	__DEV__ && console.info(`----------------------- Carango - ${new Date().toLocaleString()} ---------------------------`);

	return (
		<SystemThemeProvider>
			<AuthContextProvider>
				<SnackbarContextProvider>
					<Router />
				</SnackbarContextProvider>
			</AuthContextProvider>
		</SystemThemeProvider>
	);
};
