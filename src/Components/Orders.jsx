import Navbar from "./Navbar";
import SubNavbar from "./SubNavbar";
import './Styles.css'
import * as React from 'react';
import Box from '@mui/material/Box';

export default function Orders() {
    return (
      <div>
        <Navbar />
        <SubNavbar />
        <div >
            <h2 class="myOrders"> My Orders </h2>
        </div>
        <Box
            sx={{
                width: 1336,
                height: 97,
                backgroundColor: 'rgba(217, 217, 217, 1)',
                borderRadius: 20
            }}
        >
            <Box sx={{ color: 'text.primary', fontSize: 20 }}>Order #US6365549</Box>
        </Box>

        {/* rating and comments box */}
        <Box
            sx={{
                width: 354,
                height: 196,
                backgroundColor: 'rgba(217, 217, 217, 1)',
                borderRadius: 20
            }}
        >

        </Box>
      </div>
    );
  }
  