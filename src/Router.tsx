import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen } from '@/ui/screens';

export type RootStackParamsList = {
	SplashScreen: undefined;
	Login: undefined;
	Home: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamsList>();

export type RootStackScreenProps = NativeStackNavigationProp<RootStackParamsList>;


export const Router: React.FC = () => {

    const theme = useTheme();

    return (
        <NavigationContainer>
				<StatusBar barStyle={theme.statusBar} hidden={false} translucent={true} backgroundColor={theme.common.background} />
            <RootStack.Navigator initialRouteName='Login'>
                <RootStack.Screen name='Login' component={LoginScreen} options={{headerShown: false}} />
                <RootStack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
