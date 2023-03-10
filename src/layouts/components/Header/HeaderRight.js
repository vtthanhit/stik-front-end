import { useContext } from 'react';
import { Box, Typography, IconButton, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { LayoutContext } from '../../contexts/LayoutContext';

function HeaderRightItem() {
    const { openNav, setOpenNav} = useContext(LayoutContext);

    const handleToggleMenu = () => setOpenNav(!openNav);

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '220px' }}>
                <Hidden smDown>
                    <Typography variant="h6" sx={{ color: '#ffffff' }}>
                        S-TIK
                    </Typography>
                </Hidden>
                <IconButton sx={{ padding: '12px' }} onClick={handleToggleMenu}>
                    <MenuIcon sx={(theme) => ({ color: theme.palette.common.white })} />
                </IconButton>
            </Box>
        </>
    ); 
}

export default HeaderRightItem;