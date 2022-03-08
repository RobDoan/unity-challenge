import React from 'react'
import { AppBar, IconButton, Toolbar } from '@mui/material';
import FeatherIcon from 'feather-icons-react';

const Header = ({isSidebarOpen, toggleSidebar}) => {
  const sx = isSidebarOpen ? {paddingLeft: '265px', backgroundColor: '#fafbfb'} : {backgroundColor: '#fafbfb'}

  return <AppBar sx={sx} elevation={0}>
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleSidebar}
        size="large"
        sx={{
          display: {
            lg: 'flex',
            xs: 'none',
          },
        }}
      >
        <FeatherIcon icon="menu"/>
      </IconButton>
    </Toolbar>
  </AppBar>
}
export default Header
