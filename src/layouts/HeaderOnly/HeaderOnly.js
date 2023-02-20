import PropTypes from 'prop-types';
import { Box } from '@mui/material';

import Header from '../components/Header';

function HeaderOnlyLayout({ children }) {
    return (
        <>
            <Header />
            <Box
                component="main"
                sx={{
                    mt: 'var(--header-height)',
                    minHeight: 'calc(100vh - var(--header-height))',
                }}
            >
                {children}
            </Box>
        </>
    );
}

HeaderOnlyLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnlyLayout;
