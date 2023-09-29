import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as productReducer } from "./productReducer/reducer"
import { reducer as cardReducer } from "./Cart/reducer"
const rootReducer = combineReducers({
    productReducer,
    cardReducer
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
