import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@/ui/screens';

export type RootStackParamsList = {
	SplashScreen: undefined;
	Home: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamsList>();

export const Router: React.FC = () => {

    const theme = useTheme();

    return (
        <NavigationContainer>
            <StatusBar barStyle={theme.statusBar} hidden={false} translucent={true} backgroundColor="green" />
            {/* <StatusBar barStyle={theme.statusBar} hidden={false} translucent={true} backgroundColor={theme.common.background} /> */}
            <RootStack.Navigator initialRouteName='Home'>
                <RootStack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
