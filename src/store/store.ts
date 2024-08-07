import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from '/src/features/darkModeSlice';

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});