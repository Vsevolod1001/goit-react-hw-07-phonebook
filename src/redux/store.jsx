import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './contactSlice';
export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});
