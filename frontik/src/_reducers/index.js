import { combineReducers } from 'redux';

import catalogsReducer from './catalogs.reducer';

const appReducer = combineReducers({
    catalog: catalogsReducer
})

export default appReducer;