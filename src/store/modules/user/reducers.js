// libraries
import { handleActions } from 'redux-actions';

// js
import { LOGOUT, UPDATE_TOKEN, UPDATE_USER, UPDATE_EXERCISES } from './constants';

const initialState = {
    token: -1,
    user: null,
    infoExercises: null,
};

const handlers = {
    [LOGOUT]: () => {
        return initialState;
    },
    [UPDATE_TOKEN]: (state, action) => {
        const token = action.payload;
        return { ...state, token };
    },
    [UPDATE_USER]: (state, action) => {
        const user = action.payload;
        return { ...state, user };
    },
    [UPDATE_EXERCISES]: (state, action) => {
        const infoExercises = action.payload;
        return { ...state, infoExercises };
    },
};

export default handleActions(handlers, initialState);
