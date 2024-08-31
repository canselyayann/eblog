import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './store/uiSlice';
import authReducer from './store/authSlice'; // authReducer'ı ekleyin

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: authReducer, // authReducer'ı ekleyin
  },
});




