import React from 'react';
import { TextInputProps, View } from 'react-native';
import styled from 'styled-components/native';

interface TextFieldProps extends TextInputProps {
	label: string;
}

export const TextField: React.FC<TextFieldProps> = ({label, ...props}) => {
	return (
		<Container>
			<Label>{label}</Label>
			<Input />
		</Container>
	);
}

const Container = styled.View<{ width?: string;}>`
	width: ${props => props.width || '100%'};
	margin-bottom: 30px;
	min-height: 60px;

	width: 95%;
	height: 100%;
`

const Label = styled.Text`
	color: ${props => props.theme.textInput.text};
	font-size: 16px;
`

const Input = styled.TextInput`
	font-size: 18px;
	color: ${props => props.theme.textInput.text};

	/* width: 100%; */
	height: 40px;
	padding-left: 5px;

	border: 1px solid black;
`
