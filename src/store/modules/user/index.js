// js
import reducer from './reducers';
import { logoutAuth, updateToken, updateUser } from './actions';

// constants
const actions = { logoutAuth, updateToken, updateUser };

export default { actions, reducer };
