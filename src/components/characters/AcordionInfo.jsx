import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.primary,
        fontWeight: 800
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.primary,
        fontWeight: 800

    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '100%',
    },
    helper: {
        borderLeft: `5px solid ${theme.palette.success.dark}`,
        padding: theme.spacing(1, 2),

    },
    bgColor: {
        backgroundColor: '#c8e6c9',
    },

}));


const AcordionInfo = ({ character }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Accordion defaultExpanded
                className={classes.bgColor}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"

                >
                    <div className={classes.column}>
                        <Typography className={classes.heading}>Information</Typography>
                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>Show more</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>

                    <div className={clsx(classes.column, classes.helper)}>
                        <Typography variant="body2">
                            <strong>Birthday: {character[0].birthday}</strong>
                            <br />

                        </Typography>
                    </div>
                </AccordionDetails>
                <Divider />
                <AccordionDetails className={classes.details}>
                    <div className={clsx(classes.column, classes.helper)}>
                        <Typography variant="body2">
                            <strong>Nickname: {character[0].nickname}</strong>
                            <br />
                        </Typography>
                    </div>
                </AccordionDetails>
                <Divider />
                <AccordionDetails className={classes.details}>
                    <div className={clsx(classes.column, classes.helper)}>
                        <Typography variant="body2">
                            <strong>Occupation: {character[0].occupation.map(o => `${o}`).join(", ")}</strong>
                            <br />
                        </Typography>
                    </div>
                </AccordionDetails>

                <Divider />
                <AccordionDetails className={classes.details}>
                    <div className={clsx(classes.column, classes.helper)}>
                        <Typography variant="body2">
                            <strong>Status: {character[0].status}</strong>
                            <br />
                        </Typography>
                    </div>
                </AccordionDetails>
                <Divider />
                <AccordionDetails className={classes.details}>
                    <div className={clsx(classes.column, classes.helper)}>
                        <Typography variant="body2">
                            <strong>Appearance: {character[0].appearance.map(a => `${a}`).join(', ')}</strong>

                        </Typography>
                    </div>
                </AccordionDetails>
                <Divider />
                <AccordionDetails className={classes.details}>
                    <div className={clsx(classes.column, classes.helper)}>
                        <Typography variant="body2">
                            <strong>Portrayed: {character[0].portrayed}</strong>

                        </Typography>
                    </div>
                </AccordionDetails>
                <Divider />
                
            </Accordion>
        </div>
    )
}

export default AcordionInfo
