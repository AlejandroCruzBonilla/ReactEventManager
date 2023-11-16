import { FC } from 'react';

import Button from '@mui/material/Button';
import type { EventProps } from './interfaces';

export const Event: FC<EventProps> = ({
  id,
  name,
  date,
  hour,
  description,
  location,
  onDeleteEvent,
}) => {
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
          onClick={()=>onDeleteEvent(id)}
          variant='contained'
          color='error'
          className='event__delete'
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
