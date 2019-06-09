import { combineReducers } from 'redux';
import catalogsReducer from './catalogs.reducer';
import comicsyReducer from './comicsy.reducer';
import commentsReducer from './comments.reducer';
import authReducer from "./auth.reducer";
import basketReducer from './basket.reducer';


const appReducer = combineReducers({
    catalog: catalogsReducer,
    comics: comicsyReducer,
    comments: commentsReducer,
    auth: authReducer,
    basket: basketReducer,
});

export default appReducer;