import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import { userReducer } from './reducer/userReducer.js';
import cartReducer from './reducer/cartReducer.js';
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'
import {orderReducer} from './reducer/orderReducer.js';

const reducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    order: orderReducer
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

export const persistor = persistStore(store);