export interface Event {
  id: string;
  name: string;
  date: string;
  description: string;
  hour: string;
}

type EventState = Event[];

export type EventActions =
  | { type: '[EVENT] Add Event'; payload: Event }
  | { type: '[EVENT] Delete Event'; payload: string };

export const eventsReducer = (
  state: Event[],
  action: EventActions
): EventState => {
  switch (action.type) {
    case '[EVENT] Add Event':
      return [...state, action.payload];
    case '[EVENT] Delete Event':
      return state.filter(event => event.id !== action.payload);
    default:
      return state;
  }
};
