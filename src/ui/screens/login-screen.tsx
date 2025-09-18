import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components/native";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, SystemName, TextField } from "@/ui/components";
import { httpErrorHandler } from "@/infra/adapters";
import { useAuthentication } from "@/ui/contexts";
import { RootStackScreenProps } from "@/Router";

export const LoginScreen: React.FC = () => {

	const theme = useTheme();
	const { login } = useAuthentication();
	const navigation = useNavigation<RootStackScreenProps>();


	const [isKeyboardAppearing, setIsKeyboardAppearing] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardAppearing(true))
		const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardAppearing(false))

		return () => {
			keyboardHideListener.remove();
			keyboardShowListener.remove();
		}
	}, []);

	const onSubmit = async () => {
		try {
			setIsLoading(true);
			await login({username, password});
			navigation.navigate('Home');
		} catch (error) {
			httpErrorHandler(error, 'Login - onSubmit',)
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<Container behavior="height" enabled={isKeyboardAppearing} >
				<Header>
					<SystemName height={65} color={theme.colors.primary} />
				</Header>

				<Content>
					<TextField label='Username' leftIcon='user' value={username} onChangeText={(text) => setUsername(text)} />
					<TextField label='Senha' secureTextEntry leftIcon='key' value={password} onChangeText={(text) => setPassword(text)} />
					<Button label="Entrar" onPress={onSubmit} loading={isLoading} />
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
