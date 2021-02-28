import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SeriesRow from './SeriesRow'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    bgColor: {
        backgroundColor: 'rgba(54, 200, 86, 0.5)'
    },
}));

const BetterCallSaulEp = ({ epBcs }) => {
    const classes = useStyles();
    return (
        <div>
            
            <TableContainer component={Paper} className={classes.bgColor}>
                <Table aria-label="collapsible table" className={classes.bgColor}>
                    <TableHead>
                        <TableRow>
                        <TableCell />
                        <TableCell><h4>Episodes name</h4></TableCell>
                        <TableCell align="right"><h4>Air date</h4></TableCell>
                        <TableCell align="right"><h4>Season</h4></TableCell>
                        <TableCell align="right"><h4>Episode</h4></TableCell>
                        <TableCell align="right"><h4>Series name</h4></TableCell>
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
