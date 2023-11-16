import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Event {
  id: string;
  name: string;
  date: string;
  description: string;
  hour: string;
}

const initEvents = () => {
	const events = localStorage.getItem('events');
	if (!events) return [];
	return JSON.parse(events);
};

const initialState: Event[] =  initEvents();

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    handlerAddEvent: (state, action: PayloadAction<Event>) => {
      state.push(action.payload);
			localStorage.setItem('events', JSON.stringify(state));
    },
    handlerDeleteEvent: (state, action: PayloadAction<string>) => {
      state = state.filter(event => event.id !== action.payload);
			localStorage.setItem('events', JSON.stringify(state));
			return state
    },
  },
})

export const { handlerAddEvent, handlerDeleteEvent } = eventsSlice.actions;