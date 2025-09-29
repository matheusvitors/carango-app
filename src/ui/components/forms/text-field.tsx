import React from "react";
import { TextInputProps } from "react-native";
import styled, { useTheme } from "styled-components/native";
import Icon from '@react-native-vector-icons/feather'

interface TextFieldProps extends TextInputProps {
	label: string;
	leftIcon?: any;
	rightIcon?: any;
}

export const TextField: React.FC<TextFieldProps> = ({ label, leftIcon, rightIcon, ...props }) => {
	const theme = useTheme();

	let centerWidth = 100;
	centerWidth = leftIcon ? centerWidth - 10 : centerWidth;
	centerWidth = rightIcon ? centerWidth - 10 : centerWidth;

	return (
		<Container>
			<Label>{label}</Label>
			<InputContainer>
				{leftIcon && <Left><Icon name={leftIcon} size={26} color={theme.textInput.text} /></Left>}
				<Center width={centerWidth}>
					<Input {...props} />
				</Center>
				{rightIcon && <Right><Icon name={rightIcon} size={30} color={theme.textInput.text} /></Right>}
			</InputContainer>
		</Container>
	);
};

const Container = styled.View`
	display: flex;
	align-items: flex-start;
	justify-content: center;

	margin-bottom: 30px;
	min-height: 60px;

	width: 90%;
	height: 70px;
`;

const Label = styled.Text`
	color: ${(props) => props.theme.textInput.text};
	font-size: 16px;

	padding-bottom: 5px;
`;

const InputContainer = styled.View`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: row;

	border: 1px solid black;
	border-radius: 5px;

	width: 100%;
`

const Left = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 10%;
	padding-left: 10px;
`

const Center = styled.View<{ width?: number}>`
	display: flex;
	align-items: center;
	justify-content: center;

	width: ${props => props.width ? `${props.width}%` : '100%'};
`

const Right = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 10%;
`

const Input = styled.TextInput`
	font-size: 18px;
	color: ${(props) => props.theme.textInput.text};

	width: 100%;
	height: 50px;
	padding: 0 10px;

`;
