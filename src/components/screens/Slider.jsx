import React from 'react'
import AwesomeSlider from "react-awesome-slider";
import AwsSliderStyles from "react-awesome-slider/dist/styles.css";
import { Grid } from '@material-ui/core';

import slika1 from "../../img/638450.jpg";
import slika2 from "../../img/675482.jpg";
import slika3 from "../../img/675490.jpg";
import slika4 from "../../img/685574.jpg";
import slika5 from "../../img/685627.jpg";

const Slider = () => {
    return (
        <div className="container-img">
            <Grid container spacing={3}>
                <Grid item lg={12} md={12} xs={12} sm={12}>
                    <AwesomeSlider cssModule={AwsSliderStyles}>
                        <div data-src={slika1} />
                        <div data-src={slika2} />
                        <div data-src={slika3} />
                        <div data-src={slika4} />
                        <div data-src={slika5} />
                    </AwesomeSlider>
                </Grid>
            </Grid>
        </div>
    )
}

export default Slider
