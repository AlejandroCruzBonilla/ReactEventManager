import {  useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Modal, FormEvent, Event } from '@/components';

// useContext
// import {useContext} from 'react';
// import { EventsContext } from '@/context';

import { RootState } from '@/store';
import { useSelector } from 'react-redux';

const EventManagerPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

	// useContext
  // const { events } = useContext(EventsContext);

	//redux
  const events = useSelector((state: RootState) => state.events);

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
        <FormEvent />
      </Modal>
    </>
  );
};

export default EventManagerPage;
