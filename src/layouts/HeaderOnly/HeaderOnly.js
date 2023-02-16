import { Box } from "@mui/material";
import Header from "../components/Header";

function HeaderOnlyLayout({ children }) {
    return (
        <Box>
            <Header />
            <div>
                <div>{children}</div>
            </div>
        </Box>
    );
}

export default HeaderOnlyLayout;