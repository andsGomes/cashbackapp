// libraries
import { handleActions } from 'redux-actions';

// js
import { RESET_CONFIGS, UPDATE_BOTTOMTAB } from './constants';

const initialState = {
    identifierBottomTab: -1,
};

const handlers = {
    [RESET_CONFIGS]: () => {
        return initialState;
    },
    [UPDATE_BOTTOMTAB]: (state, action) => {
        const identifierBottomTab = action.payload;
        return { ...state, identifierBottomTab };
    },
};

export default handleActions(handlers, initialState);
