import PropTypes from 'prop-types';
import { useState } from 'react';
import { TableFooter, TablePagination, TableRow } from '@mui/material';

function AppPagination(props) {
    const { data } = props;

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableFooter>
            <TableRow>
                <TablePagination
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[5, 10, 25]}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    SelectProps={{
                        inputProps: { 'aria-label': 'Rows per page' },
                        native: true,
                    }}
                />
            </TableRow>
        </TableFooter>
    );
}

AppPagination.propTypes = {
    data: PropTypes.array.isRequired,
};

export default AppPagination;
