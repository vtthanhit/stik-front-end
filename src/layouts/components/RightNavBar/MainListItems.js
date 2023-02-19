import {
    List,
    ListItem,
    ListItemIcon,
    ListItemButton,
    ListItemText,
    Avatar,
    Box,
    Typography,
    ListSubheader,
  } from '@mui/material';
import { MenuOutlined, HomeOutlined, Work, Start, LiveHelpOutlined } from '@mui/icons-material';

function MainListItems() {
    return (
        <>
            <ListItem sx={{ padding: '16px' }}>
        <Box>
          <Avatar sx={{ mr: '16px', bgcolor: 'secondary.main' }}>H</Avatar>
        </Box>
        <Box>
          <Typography variant='body2'>Vo Trong Thanh</Typography>
          <Typography variant='caption'>thanhvo@example.com</Typography>
        </Box>
      </ListItem>
      <Box>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#">
          <ListItemIcon sx={{ minWidth: '36px' }}>
            <HomeOutlined />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#">
          <ListItemIcon sx={{ minWidth: '36px' }}>
            <Work />
          </ListItemIcon>
          <ListItemText primary="Hangfire" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#">
          <ListItemIcon sx={{ minWidth: '36px' }}>
            <Start />
          </ListItemIcon>
          <ListItemText primary="Quick Start Guide" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#">
          <ListItemIcon sx={{ minWidth: '36px' }}>
            <LiveHelpOutlined />
          </ListItemIcon>
          <ListItemText primary="Swagger" />
        </ListItemButton>
      </ListItem>
      </Box>
        </>
    );
}

export default MainListItems;