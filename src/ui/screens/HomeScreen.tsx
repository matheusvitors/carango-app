import React from 'react';
import { View } from 'react-native';
import Logo from '@assets/img/logo.svg'

export const HomeScreen: React.FC = () => {
    return (
		<View style={{backgroundColor: '#272A22', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Logo width={350} fill='#DB5445' />
		</View>
	);
}
