import { useEffect, useReducer } from 'react';
import { eventsReducer } from '@/context/events/eventsReducer';
import type {Event as EventInterfase} from '@/context';

export const useEvents = () => {

	const initEvents = () => {
    const events = localStorage.getItem('events');
    if (!events) return [];
    return JSON.parse(events);
  };

  const [events, dispatchEvent] = useReducer(eventsReducer, [], initEvents);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const handlerAddEvent = (event: EventInterfase) => {
    dispatchEvent({
      type: '[EVENT] Add Event',
      payload: event,
    });
  };
  const handlerDeleteEvent = (id: string) => {
    dispatchEvent({
      type: '[EVENT] Delete Event',
      payload: id,
    });
  };

	return {
		handlerAddEvent,
		handlerDeleteEvent,
		events,
	}
}
