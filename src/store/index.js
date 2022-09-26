import { configureStore } from '@reduxjs/toolkit';
import { eventsReducer } from './reducers';

export const store = configureStore({
  reducer: {
    event: eventsReducer,
  },
});
