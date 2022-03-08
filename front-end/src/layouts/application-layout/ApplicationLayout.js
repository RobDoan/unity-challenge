import React, { useState } from 'react';
import { Box, Container, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header'

const TopbarHeight = 70;

const MainWrapper = styled('div')(() => ({
  display: 'flex',
  minHeight: '100vh',
  overflow: 'hidden',
  width: '100%',
}));

const PageWrapper = styled('div')(({theme}) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',

  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up('lg')]: {
    paddingTop: TopbarHeight,
  },
  [theme.breakpoints.down('lg')]: {
    paddingTop: '64px',
  },
}));

const StyledPageContainer = styled(Container)(({isSidebarOpen}) => ({
  paddingTop: '20px',
  paddingLeft: isSidebarOpen ? '280px !important' : ''
}));

const ApplicationLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  return (
    <MainWrapper>
      <Header isSidebarOpen={isSidebarOpen}
              toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}/>
      <Sidebar isSidebarOpen={isSidebarOpen}/>

      <PageWrapper>
        <StyledPageContainer maxWidth={false} isSidebarOpen={isSidebarOpen}>
          <Box sx={{minHeight: 'calc(100vh - 170px)'}}>
            <Outlet/>
          </Box>
        </StyledPageContainer>
      </PageWrapper>
    </MainWrapper>
  );
};

export default ApplicationLayout;
