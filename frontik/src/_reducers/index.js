import { combineReducers } from 'redux';

import catalogsReducer from './catalogs.reducer';
import comicsyReducer from './comicsy.reducer';
import commentsReducer from './comments.reducer';
import basketReducer from './basket.reducer';

const appReducer = combineReducers({
    catalog: catalogsReducer,
    comics: comicsyReducer,
    comments: commentsReducer,
    basket: basketReducer,
});

export default appReducer;