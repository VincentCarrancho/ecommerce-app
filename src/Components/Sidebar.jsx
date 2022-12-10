import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ApplicationSection from "./shopsection";

const drawerWidth = 240;
export default function ClippedDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 200,
            boxSizing: "border-box",
            position: "static",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Categories"].map((text, index) => (
              <ListItem key={text} disablePadding={false}>
                <ListItemText
                  primary={text}
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                  disableTypography
                />
              </ListItem>
            ))}

            {["Shoes", "Games", "Consoles", "Electronics", "Decor"].map(
              (text, index) => (
                <ListItem key={text} disablePadding={false}>
                  <ListItemButton>
                    {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                    <ListItemText primary={text} sx={{ textAlign: "center" }} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
          <Divider />
          <List>
            {["Brand"].map((text, index) => (
              <ListItem key={text} disablePadding={false}>
                <ListItemText
                  primary={text}
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                  disableTypography
                />
              </ListItem>
            ))}

            {["Sony", "Panini", "Nike", "Apple", "Adidas"].map(
              (text, index) => (
                <ListItem key={text} disablePadding={false}>
                  <ListItemButton>
                    {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                    <ListItemText primary={text} sx={{ textAlign: "center" }} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
          <Divider />
          <List>
            {["Price"].map((text, index) => (
              <ListItem key={text} disablePadding={false}>
                <ListItemText
                  primary={text}
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                  disableTypography
                />
              </ListItem>
            ))}

            {[
              "$10 - $25",
              "$25 - $50",
              "$50 - $75",
              "$75 - $100",
              "$100 - $200",
              "$200 - $300",
              "$300 - $400",
            ].map((text, index) => (
              <ListItem key={text} disablePadding={false}>
                <ListItemButton>
                  {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                  <ListItemText primary={text} sx={{ textAlign: "center" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <ApplicationSection></ApplicationSection>
    </Box>
  );
}
