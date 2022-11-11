// libraries
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

// screens
import AuthScreen from '../screens/AuthScreen/AuthScreen';

// navigators
import AppRouteTab from './MainTab';

// constants
const MainStack = createStackNavigator();
const optionsDefault = {
    headerShown: false,
};

// routes
function AuthRoute() {
    return (
        <MainStack.Screen
            component={AuthScreen}
            name='authRoutes'
            options={optionsDefault}
        />
    );
}

function AppRoute() {
    return (
        <MainStack.Screen
            component={AppRouteTab}
            name='AppRouteBottomTab'
            options={optionsDefault}
        />
    );
}

function Routes() {
    // selectors
    const userInfo = useSelector((state) => state.user.user);

    function getInitialRouteName() {
        if (userInfo) {
            return 'AppRouteBottomTab';
        }

        return 'authRoutes';
    }

    return (
        <MainStack.Navigator initialRouteName={getInitialRouteName()}>
            {AuthRoute()}
            {AppRoute()}
        </MainStack.Navigator>
    );
}

export default Routes;
