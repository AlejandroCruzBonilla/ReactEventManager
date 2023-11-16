import { createContext } from 'react';
import type { Event } from './eventsReducer';

interface ContextProps {
  events: Event[];

  handlerAddEvent: (event: Event) => void;
  handlerDeleteEvent: (id: string) => void;
}

export const EventsContext = createContext({} as ContextProps);
