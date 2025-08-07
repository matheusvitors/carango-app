import { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SystemThemeContext } from "@/ui/contexts";
import { KEY_THEME } from "@/infra/config/storage-keys";

export const useSystemTheme = () => {
	const { theme, setTheme } = useContext(SystemThemeContext);

	const changeTheme = async (theme: 'light' | 'dark') => {
		setTheme(theme);
		await AsyncStorage.setItem(KEY_THEME, theme);
	}

	const getTheme = async (): Promise<string> => {
		const theme =  await AsyncStorage.getItem(KEY_THEME);
		return theme || 'light';
	}

	return { theme, changeTheme, getTheme };
}
