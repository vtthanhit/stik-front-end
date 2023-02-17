import { AppBar, IconButton, Toolbar } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';

function Header() {
    return (
        <AppBar>
            <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton edge="end">
                    <Brightness4Icon sx={(theme) => ({ color: theme.palette.common.white })} />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
