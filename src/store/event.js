import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  event: { asdasd: 'asdasd' },
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.event = action.event;
    },
  },
});

export const { addEvent } = eventSlice.actions;

export const event = ({ event }) => event.event;

export default eventSlice.reducer;
