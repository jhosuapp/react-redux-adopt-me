import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { reducers } from '../reducers';
import { configureStore } from '@reduxjs/toolkit';

const persistConfig: PersistConfig<any> = {
    key: 'root',
    storage,
    blacklist: [],
};

const persistReduce = persistReducer(persistConfig, reducers);
const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();

export const store = configureStore({
    reducer: persistReduce,
    middleware: getDefaultMiddleware =>
        process.env.NODE_ENV === 'development'
        ? [
            ...getDefaultMiddleware({serializableCheck: false}),
            reduxImmutableStateInvariant,
            ]
        : getDefaultMiddleware({
            serializableCheck: false,
            }),
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
