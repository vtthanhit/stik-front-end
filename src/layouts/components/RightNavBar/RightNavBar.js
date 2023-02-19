import { useContext } from 'react';
import { Drawer, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { LayoutContext } from '../../contexts/LayoutContext';

import NavList from './NavList';

const StyledDrawer = styled(Drawer)({
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
    },
});

function RightNavBar() {
    const { openNav } = useContext(LayoutContext);

    return (
        <StyledDrawer 
            anchor="left" 
            variant="persistent" 
            open={openNav}
        >
            <Box sx={{ width: 'var(--drawer-nav-width)', height: '100%' }}>
                <NavList />
            </Box>
        </StyledDrawer>
    );
}

export default RightNavBar;