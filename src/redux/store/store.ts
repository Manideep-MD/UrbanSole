import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import shoesReducers from '@redux/reducers/ShoesReducers';
import cartReducers from '@redux/reducers/CartReducers';
import ordersReducers from '@redux/reducers/OrdersReducers';
import authReducers from '@redux/reducers/AuthReducers';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['users', 'currentUser'],
};

const shoesPersistConfig = {
  key: 'shoes-v2',
  storage: AsyncStorage,
  whitelist: ['shoes'],
};

const cartPersistConfig = {
  key: 'cart',
  storage: AsyncStorage,
  whitelist: ['cart'],
};

const ordersPersistConfig = {
  key: 'orders',
  storage: AsyncStorage,
  whitelist: ['orders'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducers),
  shoes: persistReducer(shoesPersistConfig, shoesReducers),
  cart: persistReducer(cartPersistConfig, cartReducers),
  orders: persistReducer(ordersPersistConfig, ordersReducers),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
