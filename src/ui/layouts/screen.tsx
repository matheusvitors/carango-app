import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';

export const Screen: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<View>
			{children}
		</View>
	)
}
