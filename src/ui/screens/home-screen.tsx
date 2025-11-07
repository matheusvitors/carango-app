import React from 'react';
import { Text } from 'react-native';
import { Screen } from '@/ui/layouts';
import styled from 'styled-components/native';
import { CarSelector } from '@/ui/components/general/car-selector';

export const HomeScreen: React.FC = () => {
	return (
		<Screen initialPage>
			<Content>
				<CarSelector />
			</Content>
		</Screen>
	);
}

const Content = styled.View`
	flex: 1;
	align-items: center;

	width: 95%;
	height: 100%;

	padding-top: 20px;
`
