import React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, } from '@mui/material';
import FeatherIcon from 'feather-icons-react';

const SidebarWidth = 265;

const MenuItems = [
  {
    subheader: "CATEGORIES",
    children: [
      {
        title: 'List Categories',
        icon: 'list',
        href: '/categories',
      }
    ]
  },
  {
    subheader: "Game Items",
    children: [
      {
        title: 'Game Items',
        icon: 'download',
        href: '/game-items',
      }
    ]
  }
]

const SubHeaderItem = (props) => {
  return <Typography variant="subtitle2" fontWeight="500" sx={{my: 2, mt: 4, opacity: '0.4'}}>
    {props.title}
  </Typography>
}

const MenuItem = (props) => {
  const {title, href, icon, selected} = props
  return <List component="li" disablePadding>
    <ListItem
      button
      component={NavLink}
      to={href}
      selected={selected}
      sx={{
        mb: 1,
        ...(selected && {
          color: 'white',
          backgroundColor: (theme) => `${theme.palette.primary.main}!important`,
        }),
      }}
    >
      <ListItemIcon
        sx={{
          ...(selected && {color: 'white'}),
        }}
      >
        <FeatherIcon icon={icon} width="20" height="20"/>
      </ListItemIcon>
      <ListItemText>{title}</ListItemText>
    </ListItem>
  </List>
}

const SidebarContent = (props) => {
  const {pathname} = props
  return <Box sx={{p: 2}}>
    <Box>
      <List>
        {MenuItems.map((item, index) => (
          <React.Fragment key={item.subheader}>
            <li key={item.subheader}>
              <SubHeaderItem title={item.subheader}/>
            </li>
            {
              item.children.map((child) => {
                return <MenuItem key={child.title} {...child}
                                 selected={pathname === child.href}/>
              })
            }
          </React.Fragment>
        ))
        }
      </List>
    </Box>
  </Box>
}

const Sidebar = ({isSidebarOpen}) => {
  const {pathname} = useLocation();
  return (
    <Drawer
      anchor="left"
      open={isSidebarOpen}
      variant="persistent"
      PaperProps={{
        sx: {
          width: SidebarWidth,
          border: '0 !important',
          boxShadow: '0px 7px 30px 0px rgb(113 122 131 / 11%)',
        },
      }}
    >
      <SidebarContent pathname={pathname}/>
    </Drawer>
  );
};


export default Sidebar;
