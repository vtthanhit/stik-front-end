import PropTypes from 'prop-types';
import { Box } from '@mui/material';

import Header from '../components/Header';
import RightNavBar from '../components/RightNavBar';
import LayoutContextProvider from '../contexts/LayoutContext';

function DefaultLayout({ children }) {
    return (
        <LayoutContextProvider>
            <Header isDefault />
            <>
                <Box component="nav">
                    <RightNavBar />
                </Box>
                <Box
                    component="main"
                    sx={{
                        ml: 'calc(var(--drawer-nav-width) + var(--scroll-width))',
                        mt: 'calc(var(--header-height) + 16px)',
                        minHeight: 'calc(100vh - var(--header-height))',
                        p: '24px',
                    }}
                >
                    {children}
                </Box>
            </>
        </LayoutContextProvider>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
