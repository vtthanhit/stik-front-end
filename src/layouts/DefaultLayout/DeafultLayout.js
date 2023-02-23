import PropTypes from 'prop-types';
import { Box, useTheme } from '@mui/material';

import Header from '../components/Header';
import RightNavBar from '../components/RightNavBar';
import LayoutContextProvider, { LayoutContext } from '../contexts/LayoutContext';
import { useContext } from 'react';

function DefaultLayout({ children }) {
    return (
        <LayoutContextProvider>
            <Box sx={{ display: 'flex' }}>
                <Header isDefault />
                <>
                    <RightNavBar />
                    {children}
                </>
            </Box>
        </LayoutContextProvider>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
