import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import counterSlice from './slices/counterSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { persistReducer } from 'redux-persist';

// persist configuration
export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

// state slices
const rootSlices = {
  counter: counterSlice,
};

// redux configuration
const rootReducer = combineReducers({ ...rootSlices });

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // .concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Redux hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
// persistor.purge();
export default store;
