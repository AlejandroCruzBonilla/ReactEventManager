import { FC, ReactElement } from 'react';
import { EventsContext } from './EventsContext';
import { useEvents } from '@/hooks/useEvents';

interface Props {
  children: ReactElement | ReactElement[];
}

export const EventsProvider: FC<Props> = ({ children }) => {
  const { events, handlerAddEvent, handlerDeleteEvent } = useEvents();
  return (
    <EventsContext.Provider
      value={{
        events,
        handlerAddEvent,
        handlerDeleteEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
