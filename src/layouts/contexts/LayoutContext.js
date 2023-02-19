import { createContext, useState } from 'react';

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

export default LayoutContextProvider;