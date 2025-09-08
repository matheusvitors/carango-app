import React from 'react';
import styled from 'styled-components/native';
import { Form, SystemName, TextField } from '@/ui/components';

export const LoginScreen: React.FC = () => {
    return (
		<Container>
			<Header>
				<SystemName height={65}  color='#DB5445' />
			</Header>

			<Content>
				<Form>
					<TextField label='Username' />
					<TextField label='Username' />
				</Form>
			</Content>
		</Container>
	);
}

const Container = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	background-color: ${props => props.theme.common.background};
`

const Header = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 50%;

	background-color: green;
	`

const Content = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 50%;

	background-color: cornflowerblue;
`
