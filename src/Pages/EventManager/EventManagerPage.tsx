import { useContext, useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Modal, FormEvent, Event } from '@/components';
import { EventsContext } from '@/context';

const EventManagerPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { events, handlerAddEvent, handlerDeleteEvent } =
    useContext(EventsContext);

  return (
    <>
      <h1>Events</h1>

      <div className='events'>
        {events.map(({ id, name, description, date, hour, location }) => (
          <Event
            key={id}
            id={id}
            name={name}
            description={description}
            date={date}
            hour={hour}
            location={location}
            onDeleteEvent={handlerDeleteEvent}
          />
        ))}
      </div>

      <Fab
        color='primary'
        onClick={handleOpen}
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <AddIcon />
      </Fab>
      <Modal handleClose={handleClose} open={open}>
        <FormEvent onSubmitEvent={handlerAddEvent} />
      </Modal>
    </>
  );
};

export default EventManagerPage;
