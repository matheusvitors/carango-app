import React, { PropsWithChildren, useEffect, useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, StyleProp, ViewStyle } from "react-native";

export const Form: React.FC<PropsWithChildren> = ({ children }) => {
	const [isKeyboardAppearing, setIsKeyboardAppearing] = useState(false);

	useEffect(() => {
		const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardAppearing(true))
		const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardAppearing(false))

		return () => {
			keyboardHideListener.remove();
			keyboardShowListener.remove();
		}
	}, []);

	const keyboardAvoidingViewStyles: StyleProp<ViewStyle> = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		borderWidth: 1,
	};

	return (
		<KeyboardAvoidingView  behavior={"height"} enabled={isKeyboardAppearing}>
			{children}
		</KeyboardAvoidingView>
	);
};
