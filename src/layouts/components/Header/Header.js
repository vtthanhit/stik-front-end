import { AppBar, Box, IconButton, Toolbar, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';

import AvatarItem from './Avatar';
import HeaderLeftItem from './HeaderLeft';
import HeaderRightItem from './HeaderRight';

function Header({ isDefault }) {
    return (
        <AppBar>
            <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                {isDefault && <HeaderRightItem />}
                <Box flexGrow={1} />

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {isDefault && <HeaderLeftItem />}

                    <Tooltip title="Toggle Dark Mode">
                        <IconButton edge="end" sx={{ padding: '12px', mr: '12px' }}>
                            <Brightness4Icon sx={(theme) => ({ color: theme.palette.common.white })} />
                        </IconButton>
                    </Tooltip>

                    {isDefault && <AvatarItem />}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
