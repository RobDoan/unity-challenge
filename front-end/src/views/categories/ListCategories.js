import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, IconButton, } from '@mui/material';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ContentWrapper from '../../components/container/ContentWrapper'
import {useCategoriesContext} from './CategoriesProvider'

const ListCategories = () => {
  const {categories} = useCategoriesContext()
  return <ContentWrapper title='List Categories'>
    <div>
      <IconButton component={Link} to={`/categories`} color='primary'>
        <AddBoxIcon/> New Category
      </IconButton>
    </div>

    <Table
      aria-label="simple table"
      sx={{
        whiteSpace: 'nowrap',
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography variant="h5">Name</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h5">Action</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          categories.map( (category) => (
            <TableRow key={category.name}>
              <TableCell component="th" scope="row">
                {category.name}
              </TableCell>
              <TableCell align="right">
                <IconButton
                  component={Link}
                  to={`/categories/${category.id}`}
                  aria-label="edit">
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  </ContentWrapper>
}

export default ListCategories
