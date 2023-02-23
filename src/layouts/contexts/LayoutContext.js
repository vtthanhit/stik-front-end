import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';

export const LayoutContext = createContext();

const LayoutContextProvider = ({ children }) => {
    const [openNav, setOpenNav] = useState(true);
    // const isSmallerThanSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    // useEffect(() => {
    //     if (isSmallerThanSm) {
    //         setOpenNav(false);
    //     } else {
    //         setOpenNav(true);
    //     }
    // }, [isSmallerThanSm]);

    const layoutContextData = {
        openNav,
        setOpenNav,
    };

    return <LayoutContext.Provider value={layoutContextData}>{children}</LayoutContext.Provider>;
};

LayoutContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LayoutContextProvider;
