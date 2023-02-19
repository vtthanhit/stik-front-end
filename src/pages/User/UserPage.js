import { Grid, Typography, Box, Toolbar, Button, Input } from '@mui/material';
import { AddOutlined, CachedRounded, IosShareOutlined, SearchOutlined } from '@mui/icons-material';

import { data, headCells, actions } from './data';
import DashboardTable from '../../components/tables/DashboardTable';

function UserPage() {
    return (
        <Grid container spacing={2} sx={{ flexDirection: 'column' }}>
            <Grid item>
                <Typography variant='h5' color='primary' marginBottom={1}>Users</Typography>
                <Typography variant='body1' marginBottom={2}>Manage Users</Typography>
            </Grid>
            <Grid item>
                <Box boxShadow={3} sx={{ backgroundColor: '#ffffff' }}>
                    <Toolbar sx={{ padding: '16px !important' }}>
                        <Box>
                            <Button sx={{ mr: '5px' }} variant='contained' startIcon={<AddOutlined />}>
                                Register New User
                            </Button>
                            <Button sx={{ mr: '5px' }} variant='contained' color='secondary' startIcon={<CachedRounded />}>
                                Reload
                            </Button>
                            <Button variant='contained' color='warning' startIcon={<IosShareOutlined />}>
                                Export
                            </Button>
                        </Box>
                        <Box flexGrow={1} />
                        <Box sx={{ display: 'flex', flex: '1 1 auto' }}>
                            <Input 
                                fullWidth 
                                placeholder='Search For Users' 
                                endAdornment={<SearchOutlined color='inherit' />} 
                            />
                        </Box>
                    </Toolbar>
                    <Box>
                        <DashboardTable data={data} headCells={headCells} actions={actions} />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default UserPage;