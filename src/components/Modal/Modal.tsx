import { FC } from 'react';
import { Box, Modal as MuiModal } from '@mui/material';
import type { ModalProps } from './interfaces';

export const Modal: FC<ModalProps> = ({
  children,
  handleClose,
  open,
}) => {
  return (
    <MuiModal
      open={open}
      onClose={handleClose}
    >
      <Box className='modal-form'>
				{children}
			</Box>
    </MuiModal>
  );
};
