import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { red } from '@mui/material/colors';
import { AppBar, Avatar, Box,  IconButton, Menu, Toolbar, Tooltip, Typography } from '@mui/material';
import colorConfigs from '../../configs/colorConfigs';
import sizeConfigs from '../../configs/sizeConfigs';
import assets from '../../assets/assets';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const pages = ['Products', 'Pricing', 'Blog'];
const Topbar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.topbar.bg,
        color: colorConfigs.topbar.color


      }}
    >
      <Toolbar>
        <Typography variant="h6"
        sx={
          {       
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none'
          }
        } 
        >ZEBRA | 
        </Typography>

        <Box component="img"
        sx={{ 

          height: 34
         }}
         alt="HouseClay-Zebra"
         src={assets.images.dashboard_center_logo}
         >
          
        </Box>

        
          <Box sx={{ flexGrow: 1}}>

          </Box>

          <Box sx={{ flexGrow: 0}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ bgcolor: red[500]}} >H</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Topbar;