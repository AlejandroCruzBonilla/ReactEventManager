import type { Event } from '@/context/events/eventReducer';

export interface FormEventProps {
  onSubmitEvent: (event: Event) => void;
}
