import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import thunkMiddleWare from 'redux-thunk';
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    dialogs: dialogsReducer,
    users: usersReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;