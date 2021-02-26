import React from 'react'
import AwesomeSlider from "react-awesome-slider";
import AwsSliderStyles from "react-awesome-slider/dist/styles.css";

import valley from "../../img/321927.jpg";
import smoke from "../../img/442086.jpg";
import brbabg from "../../img/bg-brba.jpg";
import methLab from "../../img/bg-smoke.jpg";

const Slider = () => {
    return (
        <div>
            <AwesomeSlider cssModule={AwsSliderStyles}>
                <div data-src={valley} />
                <div data-src={smoke} />
                <div data-src={brbabg} />
                <div data-src={methLab} />
            </AwesomeSlider>
        </div>
    )
}

export default Slider
