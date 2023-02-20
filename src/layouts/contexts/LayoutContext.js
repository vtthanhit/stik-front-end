import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LayoutContext = createContext();

const LayoutContextProvider = ({ children }) => {
    const [openNav, setOpenNav] = useState(true);

    const layoutContextData = {
        openNav,
        setOpenNav,
    };

    return (
        <LayoutContext.Provider value={layoutContextData}>
            {children}
        </LayoutContext.Provider>
    )
};

LayoutContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LayoutContextProvider;