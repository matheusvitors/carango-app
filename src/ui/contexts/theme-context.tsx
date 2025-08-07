import { ReactNode, createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import dark from "@/ui/styles/themes/dark";
import light from "@/ui/styles/themes/light";
import { KEY_THEME } from "@/infra/config/storage-keys";
import { useSystemTheme } from "@/ui/hooks";

interface ThemeContextProps {
	theme: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const DEFAULT_VALUES = {
	theme: 'light',
	setTheme: () => {}
}

export const SystemThemeContext = createContext<ThemeContextProps>(DEFAULT_VALUES);

export const SystemThemeProvider: React.FC<{children: ReactNode}> = ({ children }) => {

	const [theme, setTheme] = useState('light');
	const { getTheme } = useSystemTheme();

	useEffect(() => {
		loadTheme();
	}, []);

	const loadTheme = async () => {
		const savedTheme = await getTheme();
		if(!savedTheme) {
			await AsyncStorage.setItem(KEY_THEME, 'light');
		}
		setTheme(savedTheme ? savedTheme : 'light');
	}

	return (
		<SystemThemeContext.Provider value={{ theme, setTheme}}>
			<ThemeProvider theme={theme === 'light' ? light : dark}>
				{children}
			</ThemeProvider>
		</SystemThemeContext.Provider>
	)
}
