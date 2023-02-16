import { AppBar, IconButton, Toolbar } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton edge="end" aria-label="menu">
                    <Brightness4Icon sx={(theme) => ({ color: theme.palette.common.white })} />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
