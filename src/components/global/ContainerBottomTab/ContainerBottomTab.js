// libraries
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { logoutAuth } from '../../../store/modules/user/actions';
import { updateBottomTab } from '../../../store/modules/configs/actions';

// js
import styles from './containerBottomTabStyles';

// functions
import FunctionsRenders from './ContainerButtonFunctions';

function ContainerBottomTab(props) {
    // selectors
    const identifierBottomTab = useSelector((state) => state.configs.identifierBottomTab);

    // dispatch
    const dispatch = useDispatch();

    //  constants
    const {
        descriptors,
        navigation,
        state,
    } = props;

    // methods
    function Logout() {
        dispatch(logoutAuth());
        navigation.replace('authRoutes');
    }

    function AllRoutes() {
        return (
            state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                return RenderBottomTab(route, index, options);
            })
        );
    }

    function NavigationTab(route) {
        const updateBottom = updateBottomTab(1);
        dispatch(updateBottom);
        navigation.navigate(route.name);
    }

    // renders
    function RenderBottomTab(route, index, options) {
        if (index !== 0) {
            return (
                <TouchableOpacity
                    key={[index]}
                    style={styles.button}
                    onPress={() => NavigationTab(route)}
                >
                    <Image
                        source={FunctionsRenders.ValidationIcon(route)}
                        style={styles.image}
                        resizeMode='contain'
                    />
                    <Text style={styles.txtButton}>{options.title}</Text>
                </TouchableOpacity>
            );
        }
    }

    function RenderScrollBottomTab() {
        if (identifierBottomTab !== 1) {
            return (
                <ScrollView
                    style={styles.scroll}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {AllRoutes()}
                    <TouchableOpacity style={styles.button} onPress={Logout}>
                        <Image
                            source={require('../../../../assets/icons/iconLogout.png')}
                            style={styles.image}
                            resizeMode='contain'
                        />
                        <Text style={styles.txtButton}>Sair</Text>
                    </TouchableOpacity>
                </ScrollView>
            );
        }

        return null;
    }

    return RenderScrollBottomTab();

}

export default ContainerBottomTab;
