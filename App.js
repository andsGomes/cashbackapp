// libraries
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/index';

// routes
import MainStack from './src/routes/index';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <MainStack />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

export default App;
