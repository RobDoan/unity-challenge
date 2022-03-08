import React from 'react';
import Grid from '@mui/material/Grid'
import { Outlet } from 'react-router-dom';
import PageContainer from '../../components/container/PageContainer'
import ListCategories from './ListCategories'
import { CategoriesProvider } from './CategoriesProvider'

const Categories = () => {
  return <CategoriesProvider>
    <PageContainer title='List categories' description='list categories'>
      <Grid container spacing={2}>
        <Grid item lg={8} md={8} xs={12}>
          <ListCategories/>
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <Outlet/>
        </Grid>
      </Grid>
    </PageContainer>
  </CategoriesProvider>
}
export default Categories
