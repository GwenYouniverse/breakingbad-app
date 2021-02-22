import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    
}));
const Carousel = () => {
    const classes = useStyles();

    return (
       
            <Grid container spacing={3}>
                <Grid item lg={6} md={6} xs={12} sm={12}>
                    <img className="detailsimg my-1" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202001/Breaking_Bad.jpeg?Ifrqi.v01Y0KfAlAyY172HCu8HZTJJvy&size=770:433" alt="" />
                </Grid>

                <Grid item lg={6} md={6} xs={12} sm={12}>
                    <img className="detailsimg my-1" src="https://www.ondishmag.com/wp-content/uploads/2018/08/p10492751_b_h6_ae-678x381.jpg" alt="" />
                </Grid>
            </Grid>
        
    );
}

export default Carousel