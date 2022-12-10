import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const drawerWidth = 240;
export default function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 250, boxSizing: 'border-box', position: 'static' },
        }}
      >
        <Toolbar/>
        <Box sx={{ overflow: 'auto'}}>
          <List>
            {['Categories'].map((text, index) => (
              <ListItem key={text} disablePadding={false}>
                  <ListItemText primary={text} sx={{textAlign: 'center', fontWeight: 'bold'}} disableTypography  />
              </ListItem>
            ))}

            {['Shoes', 'Games', 'Consoles', 'Electronics','Decor'].map((text, index) => (
              <ListItem key={text} disablePadding={false}> 
                <ListItemButton>
                  {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                  <ListItemText primary={text} sx={{textAlign: 'center'}} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>       
          <Divider />
          <List>
            {[].map((text, index) => (
              <ListItem key={text} disablePadding={false}>
                  <ListItemText primary={text} sx={{textAlign: 'center', fontWeight: 'bold'}} disableTypography/>
              </ListItem>
            ))}

            {[].map((text, index) => (
              <ListItem key={text} disablePadding={false}>
                <ListItemButton>
                  {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                  <ListItemText primary={text} sx={{textAlign: 'center'}}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />        
          <List>
            {[].map((text, index) => (
              <ListItem key={text} disablePadding={false}>
                  <ListItemText primary={text} sx={{textAlign: 'center', fontWeight: 'bold'}} disableTypography  />
              </ListItem>
            ))}

            {[].map((text, index) => (
              <ListItem key={text} disablePadding={false}> 
                <ListItemButton>
                  {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                  <ListItemText primary={text} sx={{textAlign: 'center'}} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>  

        </Box>
      </Drawer>
    </Box>
  );
}
