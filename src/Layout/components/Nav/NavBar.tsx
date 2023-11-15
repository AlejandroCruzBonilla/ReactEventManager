import { FC, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { NavDrawer } from '../NavDrawer';
import { NavLink } from '../NavLink';

const navItems = [
  { to: '/', text: 'Dashboard' },
  { to: '/events', text: 'Event Manager' },
];

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export const NavBar: FC<Props> = ({ window }) => {
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  return (
    <>
      <AppBar component='nav' position='static'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
          >
            Event Manager
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map(({ to, text }) => (
              <Button key={to} sx={{ color: '#fff' }}>
                <NavLink href={to} text={text} />
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <NavDrawer
            handleDrawerToggle={handleDrawerToggle}
            navItems={navItems}
          />
        </Drawer>
      </nav>
    </>
  );
};
