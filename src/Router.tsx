import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginScreen } from '@/ui/screens';
import { ProtectedRoutes } from '@/ui/routes';
import { useAuthentication } from '@/ui/contexts';

export type RootStackParamsList = {
	Login: undefined;
	ProtectedRoutes: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamsList>();

export type RootStackScreenProps = NativeStackNavigationProp<RootStackParamsList>;

export const Router: React.FC = () => {

    const theme = useTheme();
	const { isAuthenticated } = useAuthentication();

    return (
        <NavigationContainer>
			<StatusBar barStyle={theme.statusBar} hidden={false} translucent={true} backgroundColor={theme.common.background} />
            <RootStack.Navigator>
				{ !isAuthenticated ?
					<RootStack.Screen name='Login' component={LoginScreen} options={{headerShown: false}} />
				:
					<RootStack.Screen name='ProtectedRoutes' component={ProtectedRoutes} options={{headerShown: false}} />
				}
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
