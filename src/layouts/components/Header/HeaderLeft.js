import { Tooltip, IconButton } from '@mui/material';
import { Info } from '@mui/icons-material';

function HeaderLeftItem() {
    return (
        <>
            <Tooltip title="Info">
                <IconButton edge="end" sx={{ padding: '12px', mr: '0px' }}>
                    <Info sx={(theme) => ({ color: theme.palette.common.white })} />
                </IconButton>
            </Tooltip>
        </>
    );
}

export default HeaderLeftItem;
