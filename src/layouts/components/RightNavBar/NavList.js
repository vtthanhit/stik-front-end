import {
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Box,
  ListSubheader,
} from '@mui/material';
import { useLocation } from 'react-router-dom';

import MainListItems from './MainListItems';
import { dataNav } from './dataNav';

function NavList() {
  const location = useLocation();

  const isNavActive = (path) => {
    return location.pathname === path ? true : false;
  };

  return (
    <List sx={{ pt: '0px' }}>
      <MainListItems />
      <Box>
        {
          dataNav.map((list, index) => (
            <Box key={index}>
              <ListSubheader>{list.subHeader}</ListSubheader>
              {
                list.data.map((item, index) => (
                  <ListItem disablePadding key={index}>
                    <ListItemButton 
                      component="a" 
                      href={item.url} 
                      selected={isNavActive(item.url)}
                      sx={{
                        '&.Mui-selected': {
                          backgroundColor: 'rgb(0 0 0 / 4%)',
                        },
                        '&.Mui-selected .MuiTypography-root': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: '36px' }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  </ListItem>
                ))
              }
            </Box>
          ))
        }
      </Box>
    </List>
  );
}

export default NavList;