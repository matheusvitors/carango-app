import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components/native";
import { Button, SystemName, TextField } from "@/ui/components";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export const LoginScreen: React.FC = () => {

	const theme = useTheme();

	const [isKeyboardAppearing, setIsKeyboardAppearing] = useState(false);

	useEffect(() => {
		const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardAppearing(true))
		const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardAppearing(false))

		return () => {
			keyboardHideListener.remove();
			keyboardShowListener.remove();
		}
	}, [])

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<Container behavior="height" enabled={isKeyboardAppearing} >
				<Header>
					<SystemName height={65} color={theme.colors.primary} />
				</Header>

				<Content>
					<TextField label='Username' leftIcon='user' />
					<TextField label='Senha' secureTextEntry leftIcon='key' />
					<Button label="Entrar" onPress={() => {}} />
				</Content>
			</Container>
		</TouchableWithoutFeedback>
	);
};

const Container = styled.KeyboardAvoidingView`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	background-color: ${(props) => props.theme.common.background};
`;

const Header = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 45%;
`;

const Content = styled.View`
	display: flex;
	align-items: center;
	justify-content: flex-start;

	width: 100%;
	height: 55%;
`;
