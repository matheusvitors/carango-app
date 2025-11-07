import { Header } from '@/ui/components';
import { useIsFocused } from '@react-navigation/native';
import React, { PropsWithChildren, useEffect } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

interface ScreenProps {
	title?: string;
	initialPage?: boolean;
}


export const Screen: React.FC<PropsWithChildren<ScreenProps>> = ({ children, title, initialPage }) => {

	const isFocused = useIsFocused();
	const insets = useSafeAreaInsets();
	const theme = useTheme();

	useEffect(() => {
		verifyAuthentication();
	}, [isFocused])

	const verifyAuthentication = async () => {
		//logica do refresh token
	}

	const safeAreaViewStyles: StyleProp<ViewStyle> = {
		flex: 1,
		flexGrow: 1,
		marginBottom: insets.bottom,
		paddingLeft: insets.left,
		paddingRight: insets.right,
		paddingTop: insets.top,
		backgroundColor: theme.common.background,
		alignItems: 'center'
	};


	return (
		<SafeAreaView style={safeAreaViewStyles}>
			<Header title={title} intialPage={initialPage} />
			{children}
		</SafeAreaView>
	)
}
