import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SeriesRow from './SeriesRow'


const BetterCallSaulEp = ({ epBcs }) => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell><strong>Episodes name</strong></TableCell>
                            <TableCell align="right"><strong>Air date</strong></TableCell>
                            <TableCell align="right"><strong>Season</strong></TableCell>
                            <TableCell align="right"><strong>Episode</strong></TableCell>
                            <TableCell align="right"><strong>Series name</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {epBcs.map((row) => (
                            <SeriesRow key={row.episode_id} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default BetterCallSaulEp
