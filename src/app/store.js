import { configureStore } from '@reduxjs/toolkit';
import scoreReducer from '../features/counter/scoreSlice';

export const store = configureStore({
  reducer: {
    score: scoreReducer,
  },
});
