import { LogoutOutlined, PersonOutlined } from '@mui/icons-material';
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Popover, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { styled } from '@mui/material/styles';

const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
      width: 525,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        margin: 0
      }
    }
}));

function AvatarItem() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

    const handleClickAvatar = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    const handleClickLogout = () => setIsLogoutDialogOpen(true);
    const handleLogoutDialogClose = () => setIsLogoutDialogOpen(false);
    const handleLogoutConfirmed = () => setIsLogoutDialogOpen(false);
    
    return (
        <>
            <Avatar 
                sx={{ ml: '16px', bgcolor: 'secondary.main', cursor: 'pointer' }}
                onClick={handleClickAvatar}
            >
                H
            </Avatar>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "center",
                    horizontal: "left"
                }}
                transformOrigin={{
                    vertical: "center",
                    horizontal: "right"
                }}
            >
                <List disablePadding>
                    <ListItem sx={{ padding: '16px' }}>
                        <Box>
                            <Avatar sx={{ mr: '16px', bgcolor: 'secondary.main' }}>H</Avatar>
                        </Box>
                        <Box>
                            <Typography variant='body2'>Vo Trong Thanh</Typography>
                            <Typography variant='caption'>thanhvo@example.com</Typography>
                        </Box>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Account" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={handleClickLogout}>
                            <ListItemIcon>
                                <LogoutOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Popover>
            <StyledDialog open={isLogoutDialogOpen} onClose={handleLogoutDialogClose}>
                <DialogTitle>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <LogoutOutlined />
                        <Typography sx={{ ml: '12px' }} variant='h5'>Logout Confirmation</Typography>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Typography variant='body1'>Do you really want to Logout?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleLogoutDialogClose}>Cancel</Button>
                    <Button variant='contained' color='error' onClick={handleLogoutConfirmed} autoFocus>
                        Logout
                    </Button>
                </DialogActions>
            </StyledDialog>
        </>
    );
}

export default AvatarItem;