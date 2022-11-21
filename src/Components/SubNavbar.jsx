import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <h4 className='Categories'>Home</h4>
        <h4 className='Categories'>Electronics</h4>
        <h4 className='Categories'>Art & More</h4>
        <h4 className='Categories'>Home Living</h4>
        <h4 className='Categories'>Clothing & Accessories</h4>
        <h4 className='Categories'>Sporting Goods</h4>
        <h4 className='Categories'>Books</h4>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
