import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import thunkMiddleWare from 'redux-thunk';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
    dialogs: dialogsReducer,
    users: usersReducer,
    auth: authReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['dialogs']
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = createStore(persistedReducer, applyMiddleware(thunkMiddleWare));
export let persistor = persistStore(store);



// let reducers = combineReducers({
//     dialogs: dialogsReducer,
//     users: usersReducer,
//     auth: authReducer
// });

// const store = createStore(reducers, applyMiddleware(thunkMiddleWare));


// export default store;