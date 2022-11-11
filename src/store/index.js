// libraries
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';

// js
import { actions, reducers } from './modules';

// constants
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

// redux
const middleware = [thunk];
const composer = compose(applyMiddleware(...middleware));
const pReducer = persistReducer(persistConfig, combineReducers(reducers));
const store = createStore(pReducer, composer);
const persistor = persistStore(store);
export { actions, persistor, store };
