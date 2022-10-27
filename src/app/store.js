import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import openReducer from '../features/openSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    open: openReducer,
  },
});
