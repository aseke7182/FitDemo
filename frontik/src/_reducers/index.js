import { combineReducers } from 'redux';

import catalogsReducer from './catalogs.reducer';
import comicsyReducer from './comicsy.reducer';

const appReducer = combineReducers({
    catalog: catalogsReducer,
    comics: comicsyReducer,
});

export default appReducer;