import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

interface LoaderProps {
	color?: string;
}

export const Loader: React.FC<LoaderProps> = ({ color }) => {

	const theme = useTheme()

	return (
		<ActivityIndicator color={color || theme.common.text} size={24} />
	);
}
