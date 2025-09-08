import React, { PropsWithChildren } from 'react';
import { KeyboardAvoidingView, StyleProp, View, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

export const Form: React.FC<PropsWithChildren> = ({children}) => {

	const keyboardAvoidingViewStyles: StyleProp<ViewStyle> = {
		// display: flex
		width: '100%',
		height: '100%',
		backgroundColor: 'red',
		borderWidth: 1
	}

	return (
		<Container>
		{/* <KeyboardAvoidingView style={keyboardAvoidingViewStyles}> */}
			{children}
		</Container>
	);
}

const Container = styled.KeyboardAvoidingView`
	display: flex;
	align-items: center;
	justify-content: center;

	/* border: 1px solid red; */
	width: '100%';
	height: '100%';
	background-color: 'red';
`
