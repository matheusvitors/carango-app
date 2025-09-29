import React, { useEffect, useState } from 'react';
import { Animated, StyleProp, Text, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

export interface SnackbarProps {
	message: string;
	dismissButtonText?: string;
	isVisible: boolean;
	type?: snackbarTypes;
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export type snackbarTypes = 'primary' | 'accent' | 'success' | 'warning' | 'attention';

export const Snackbar: React.FC<SnackbarProps> = ({ message, dismissButtonText, isVisible, type, setIsVisible }) => {

	const theme = useTheme();
	const insets = useSafeAreaInsets();

	const [animation, setAnimation] = useState(new Animated.Value(0));

	const types = {
		primary: { background: theme.colors.primary, textColor: theme.colors.black},
		accent: { background: theme.colors.accent, textColor: theme.colors.black},
		success: { background: theme.semantic.success, textColor: theme.colors.black},
		attention: { background: theme.semantic.attention, textColor: theme.colors.black},
		warning: { background: theme.semantic.warning, textColor: theme.colors.white},
	}

	const colorScheme = type ? types[type] : types['primary'];

	useEffect(() => {
		isVisible && open();
		isVisible && !dismissButtonText && close(3000);
	}, [isVisible]);

	const open = () => {
		Animated.timing(animation, {
			toValue: 1,
			duration: 300,
			useNativeDriver: true
		}).start();
	}

	const close = (time: number) => {
		setTimeout(() => {
			Animated.timing(animation, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true
			}).start();
			setIsVisible(false);
		}, time);
	}

	const translateY = animation.interpolate({
		inputRange: [0, 1],
		outputRange: [100, 0]
	})

	const styles: StyleProp<ViewStyle> = {
		position: 'absolute',
		height: 72,
		bottom: !isVisible ? 10 : insets.bottom + 15,
		left: 5,
		right: 5,
		backgroundColor: colorScheme.background || theme.colors.secondary,
		padding: 16,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
		alignItems: 'center',
		display: 'flex'
	}

	return (
		<Animated.View style={[ styles, {transform: [{translateY}]} ]}>
			<Text>{message}</Text>
		</Animated.View>
	);
}
