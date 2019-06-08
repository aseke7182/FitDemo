import { combineReducers } from 'redux';

import catalogsReducer from './catalogs.reducer';
import comicsyReducer from './comicsy.reducer';
import commentsReducer from './comments.reducer';
import authReducer from "./auth.reducer";

const appReducer = combineReducers({
    catalog: catalogsReducer,
    comics: comicsyReducer,
    comments: commentsReducer,
    auth: authReducer
});

export default appReducer;