import { combineReducers } from 'redux';

import loginReducer from './login.reducer';
import comicsReducer from './comics.reducer';

const appReducer = combineReducers({
    login: loginReducer,
    comics: comicsReducer
});

export default appReducer;