import { FC } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import type { NavDrawerProps } from './interfaces';
import { NavLink } from '../NavLink';

export const NavDrawer: FC<NavDrawerProps> = ({
  navItems,
  handleDrawerToggle,
}) => {
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        Event Manager
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ to, text }) => (
          <ListItem key={to} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', justifyContent: 'center' }}>
							<NavLink href={to} text={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
