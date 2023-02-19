import { Tooltip, IconButton } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

function HeaderLeftItem() {
    return (
        <>
             <Tooltip title="Info">
                <IconButton edge="end" sx={{ padding: '12px', mr: '0px' }}>
                    <InfoIcon sx={(theme) => ({ color: theme.palette.common.white })} />
                </IconButton>
            </Tooltip>
        </>
    );
}

export default HeaderLeftItem;