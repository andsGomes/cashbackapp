// js
import user from './user';
import configs from './configs';

export const actions = {
    user: user.actions,
    configs: configs.actions,
};

export const reducers = {
    user: user.reducer,
    configs: configs.reducer,
};
