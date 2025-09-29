import React from "react";
import { AuthContextProvider, SnackbarContextProvider, SystemThemeProvider } from "@/ui/contexts";
import { Router } from "@/Router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const App: React.FC = () => {
	__DEV__ && console.info(`----------------------- Carango - ${new Date().toLocaleString()} ---------------------------`);

	return (
		<SystemThemeProvider>
			<SafeAreaProvider>
				<AuthContextProvider>
					<SnackbarContextProvider>
						<Router />
					</SnackbarContextProvider>
				</AuthContextProvider>
			</SafeAreaProvider>
		</SystemThemeProvider>
	);
};
