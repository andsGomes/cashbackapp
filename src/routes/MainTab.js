// libraries
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import DepositScreen from '../screens/DepositScreen/DepositScreen';
import ExtractScreen from '../screens/ExtractScreen/ExtractScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import InformExercisesScreen from '../screens/InformExercisesScreen/InformExercisesScreen';
import InstructionScreen from '../screens/InstructionScreen/InstructionScreen';
import ParticipateScreen from '../screens/ParticipateScreen/ParticipateScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import RansomScreen from '../screens/RansomScreen/RansomScreen';

// components
import ContainerBottomTab from '../components/global/ContainerBottomTab/ContainerBottomTab';

// routes
function AppRoutes() {
    // constants
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator tabBar={(props) => <ContainerBottomTab {...props} />}>
            <Tab.Screen
                component={HomeScreen}
                name='HomeScreen'
            />
            <Tab.Screen
                component={ProfileScreen}
                name='ProfileScreen'
                options={{ title: 'Meu perfil' }}
            />
            <Tab.Screen
                component={InstructionScreen}
                name='InstructionScreen'
                options={{ title: 'Como Funciona?' }}
            />
            <Tab.Screen
                component={InformExercisesScreen}
                name='InformExercisesScreen'
                options={{ title: 'Informar Exercício' }}
            />
            <Tab.Screen
                component={ParticipateScreen}
                name='ParticipateScreen'
                options={{ title: 'Participar' }}
            />
            <Tab.Screen
                component={DepositScreen}
                name='DepositScreen'
                options={{ title: 'Realizar Depósito' }}
            />
            <Tab.Screen
                component={ExtractScreen}
                name='ExtractScreen'
                options={{ title: 'Extrato' }}
            />
            <Tab.Screen
                component={RansomScreen}
                name='RansomScreen'
                options={{ title: 'Resgatar' }}
            />
        </Tab.Navigator>
    );
}

export default AppRoutes;
