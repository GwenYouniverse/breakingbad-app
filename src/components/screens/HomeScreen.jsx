import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';
import { animateScroll as scroll } from 'react-scroll';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    title: {
        fontSize: '3rem'
    },
    container: {
        textAlign: 'center',
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '4rem'
    }

}));
const HomeScreen = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div className={classes.root}>
            <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50} >
                <div className={classes.container}>
                    <h1 className={classes.title}>Lets cook biatch </h1>
                    <IconButton>
                        <ExpandMoreIcon onClick={() => scroll.scrollMore(500)} />
                    </IconButton>
                </div>
                <Grid container spacing={3}>
                <Grid item lg={6} md={6} xs={12} sm={12}>
                    <img className="detailsimg my-1 imageFade" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202001/Breaking_Bad.jpeg?Ifrqi.v01Y0KfAlAyY172HCu8HZTJJvy&size=770:433" alt="" />
                </Grid>

                <Grid item lg={6} md={6} xs={12} sm={12}>
                    <img className="detailsimg my-1 imageFade" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202001/Breaking_Bad.jpeg?Ifrqi.v01Y0KfAlAyY172HCu8HZTJJvy&size=770:433" alt="" />
                </Grid>
            </Grid>
            </Collapse>
        </div>

    )
}

export default HomeScreen
