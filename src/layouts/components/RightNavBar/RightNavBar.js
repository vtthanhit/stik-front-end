import { useContext } from 'react';
import { Drawer, Box, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

import NavList from './NavList';
import { LayoutContext } from '../../contexts/LayoutContext';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        overflow: 'auto',
        overflowY: 'scroll',
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': {
            width: 'var(--scroll-width)',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#babac0',
        },
        zIndex: '1000',
        top: 'var(--header-height)',
        [theme.breakpoints.down('sm')]: {
            top: 0,
        },
    },
}));

function RightNavBar() {
    const { openNav, setOpenNav } = useContext(LayoutContext);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box
            component="nav"
            sx={{
                width: { sm: 240 },
                height: '100vh',
                flexShrink: { sm: 0 },
                transition: 'all 0.2s',
                [theme.breakpoints.up('sm')]: {
                    width: openNav ? '240px' : '0px',
                    overflowX: 'hidden',
                },
            }}
        >
            <StyledDrawer
                anchor="left"
                variant={isSmallScreen ? 'temporary' : 'persistent'}
                open={isSmallScreen ? !openNav : openNav}
                onClose={() => setOpenNav(!openNav)}
            >
                <Box sx={{ width: 'var(--drawer-nav-width)', height: '100%' }}>
                    <NavList />
                </Box>
            </StyledDrawer>
        </Box>
    );
}

export default RightNavBar;
