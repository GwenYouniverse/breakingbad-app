import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({

}));
const Carousel = ({ handleClickBrba, handleClickBcs }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item lg={6} md={6} xs={12} sm={12}>
                <Link to='/episodes?series=Breaking+Bad'>
                    
                    <img className="detailsimg my-1" onClick={handleClickBrba} src="https://wallpapercave.com/wp/wp3963420.jpg" alt="" />
                </Link>
            </Grid>

            <Grid item lg={6} md={6} xs={12} sm={12}>
                <Link to='/episodes?series=Better+Call+Saul'>
                    <img className="detailsimg my-1" onClick={handleClickBcs} src="https://wallpapercave.com/wp/wp1930597.jpg" alt="" />
                </Link>
            </Grid>
        </Grid>

    );
}

export default Carousel