import { FC } from 'react';
import Button from '@mui/material/Button';

// //useContext
// import {useContext}from 'react';
// import { EventsContext } from '@/context';

// Redux
import { useDispatch } from 'react-redux';
import { handlerDeleteEvent } from '@/store/slices';

import type { EventProps } from './interfaces';

export const Event: FC<EventProps> = ({
  id,
  name,
  date,
  hour,
  description,
  location,
}) => {
  // useContext
  // const { handlerDeleteEvent } = useContext(EventsContext);

  // Redux
  const dispatch = useDispatch();

  return (
    <div className='event'>
      <div className='event__header'>
        <div className='event__location'>{location}</div>
      </div>
      <div className='event__body'>
        <h2 className='event__name'>{name}</h2>
        <div className='event__time'>
          <div className='event__date'>{date}</div>
          <div className='event__hour'>{hour}</div>
        </div>

        <p className='event__description'>{description}</p>
      </div>
      <div className='event__actions'>
        <Button
					//useContext
          // onClick={()=>handlerDeleteEvent(id)}
					//Redux
          onClick={() => dispatch(handlerDeleteEvent(id))}
          variant='contained'
          color='error'
          className='event__delete'
        >
          Delete Event
        </Button>
      </div>
    </div>
  );
};
