import { combineReducers } from 'redux';

import loginReducer from './login.reducer';
import catalogsReducer from './catalogs.reducer';
import comicsReducer from './comics.reducer';

const appReducer = combineReducers({
    login: loginReducer,
    catalog: catalogsReducer,
    comics: comicsReducer
});

export default appReducer;