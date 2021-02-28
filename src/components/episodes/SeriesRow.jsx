import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});


const BreakingBadEpRow = ({ row }) => {
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (

        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>

                <TableCell component="th" scope="row">
                    <h6>{row.title}</h6>
                </TableCell>
                <TableCell align="right"><h6>{row.air_date}</h6></TableCell>
                <TableCell align="right"><h6>{row.season}</h6></TableCell>
                <TableCell align="right"><h6>{row.episode}</h6></TableCell>
                <TableCell align="right"><h6>{row.series}</h6></TableCell>
            </TableRow>

            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h5" gutterBottom component="div">
                                Cast
                </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.characters.map(c => (
                                        <TableRow key={row.episode_id}>
                                            <TableCell component="th" scope="row">
                                                <h5>{c}</h5>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>

    )
}

export default BreakingBadEpRow
