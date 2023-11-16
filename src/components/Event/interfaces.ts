export interface EventProps {
  id: string;
  name: string;
  date: string;
  hour: string;
  description: string;
  location: string;
  onDeleteEvent: (id:string) => void;
}
