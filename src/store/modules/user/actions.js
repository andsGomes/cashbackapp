// js
import { LOGOUT, UPDATE_TOKEN, UPDATE_USER, UPDATE_EXERCISES } from './constants';

// actions
export const logoutAuth = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};

export const updateToken = (token) => (dispatch) => {
    dispatch({
        type: UPDATE_TOKEN,
        payload: token,
    });
};

export const updateUser = (user) => (dispatch) => {
    dispatch({
        type: UPDATE_USER,
        payload: user,
    });
};

export const updateExercises = (exercises) => (dispatch) => {
    dispatch({
        type: UPDATE_EXERCISES,
        payload: exercises,
    });
};
