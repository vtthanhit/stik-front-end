import {
    TableContainer,
    Button,
    Switch,
    FormControlLabel,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableSortLabel,
    TableBody,
    Checkbox,
    Menu, 
    Paper,
    MenuItem,
} from '@mui/material';
import { KeyboardArrowDownOutlined } from '@mui/icons-material';
import { useState } from 'react';

import AppPagination from '../pagy/AppPagination';

function DashboardTable({...props}) {
    const data = props.data;
    const headCells = props.headCells;

    // Switch
    const optionSwitchs = ['Dense', 'Striped', 'Bordered'];
    const [switchSelected, setSwitchSelected] = useState('Striped');

    const handleSwitchChange = (option) => (event) => { 
        setSwitchSelected(option === switchSelected ? null : option)
    };

    // Sort table
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState(headCells[0].id);

    const handleSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const stableSort = (array, comparator) => {
        const stabilizedThis = array.map((el, index) => [el, index]);

        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });

        return stabilizedThis.map((el) => el[0]);
    };

    const getComparator = (order, orderBy) => {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    };

    const descendingComparator = (a, b, orderBy) => {
        if (b[orderBy] < a[orderBy]) return -1;
        if (b[orderBy] > a[orderBy]) return 1;

        return 0;
    };

    const sortedRows = stableSort(data, getComparator(order, orderBy));

    // Button actions
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
       setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
       setAnchorEl(null);
    };

    return (
        <TableContainer component={Paper}>
            {optionSwitchs.map((option, index) => (
                <FormControlLabel 
                    key={index} 
                    sx={{ ml: '8px' }} 
                    control={<Switch checked={switchSelected===option} onChange={handleSwitchChange(option)} />}
                    label={option}
                />
            ))}
            {/* table */}
            <Table size={switchSelected === 'Dense' ? 'small' : 'medium'}>
                <TableHead>
                    <TableRow>
                        {headCells.map(headCell => (
                            <TableCell key={headCell.id}>
                                <TableSortLabel
                                    active={orderBy === headCell.id}
                                    direction={orderBy === headCell.id ? order : 'asc'}
                                    onClick={() => handleSort(headCell.id)}
                                >
                                    {headCell.label}
                                </TableSortLabel>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedRows.map((row, index) => (
                        <TableRow key={index}>
                            {Object.keys(row).map(key => (
                                typeof row[key] === 'boolean' ? (
                                    <TableCell key={key}>
                                        <Checkbox checked={row[key]} />
                                    </TableCell>
                                ) : (
                                    <TableCell key={key}>{row[key]}</TableCell>
                                )
                            ))}
                            <TableCell>
                                <Button
                                    variant='contained'
                                    disableElevation
                                    aria-controls={open ? 'actions' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    endIcon={<KeyboardArrowDownOutlined />}
                                    onClick={handleClick}
                                >
                                    Actions
                                </Button>
                                <Menu
                                    id='actions'
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    {props.actions.map((action, index) => (
                                        <MenuItem key={index} onClick={handleClose}>{action}</MenuItem>
                                    ))}
                                </Menu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <AppPagination data={data} component={props.component} />
            </Table>
        </TableContainer>
    );
}

export default DashboardTable;