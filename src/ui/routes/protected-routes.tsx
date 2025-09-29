import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "@/ui/screens";

export type ProtectedRoutesStackParamsList = {
	Home: undefined;
};

const ProtectedRoutesStack = createNativeStackNavigator<ProtectedRoutesStackParamsList>();

export type ProtectedRoutesStackScreenProps = NativeStackNavigationProp<ProtectedRoutesStackParamsList>;

export const ProtectedRoutes: React.FC = () => {
	const theme = useTheme();

	return (
		<ProtectedRoutesStack.Navigator initialRouteName='Home'>
			<ProtectedRoutesStack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
		</ProtectedRoutesStack.Navigator>
	);
};
