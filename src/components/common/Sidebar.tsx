import { Avatar, Box, Drawer, IconButton, List, Stack, Toolbar } from "@mui/material";
import assets from "../../assets/assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import { useState } from "react";
// import {IconButton} from "@mui/material";
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {

const [open,setOpen] = useState(false);


  return (
    
    //  <IconButton>
    //   <MenuIcon/>
    //  </IconButton>

    <Drawer
      variant="permanent"
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color
        }
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: "20px" }}>
          <Stack
           sx={{ width: "100%" }}
            direction="row"
            justifyContent="center"
          >
        <Box component="img"
        sx={{ 

          height: 44
         }}
         alt="HouseClay-Zebra"
         src={assets.images.dashboard_center_logo}
         >
          
        </Box>
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) => (
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
