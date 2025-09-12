import { useState, useEffect } from "react";
import { Keyboard } from "react-native";

export const useKeyboard = () => {
	const [isKeyboardAppearing, setIsKeyboardAppearing] = useState(false);

	useEffect(() => {
		const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardAppearing(true))
		const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardAppearing(false))

		return () => {
			keyboardHideListener.remove();
			keyboardShowListener.remove();
		}
	}, []);

	return { isKeyboardAppearing }
}
