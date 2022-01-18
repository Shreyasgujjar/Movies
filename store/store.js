import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import moviesReducer from "../reducers/reducers";
import loginReducer from "../reducers/loginReducer";

const rootReducer = combineReducers({
    moviesReducer,
    loginReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));