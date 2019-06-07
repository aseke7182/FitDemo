import { combineReducers } from 'redux';

import catalogsReducer from './catalogs.reducer';
import comicsyReducer from './comicsy.reducer';
import commentsReducer from './comments.reducer';

const appReducer = combineReducers({
    catalog: catalogsReducer,
    comics: comicsyReducer,
    comments: commentsReducer,
});

export default appReducer;