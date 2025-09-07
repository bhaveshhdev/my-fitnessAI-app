import { configureStore } from '@reduxjs/toolkit';
import foodsReducer from '../slice/foodsSlice';

export const store = configureStore({
  reducer: {
    foods: foodsReducer,
  },
});
