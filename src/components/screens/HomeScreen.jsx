import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ScrollAnimation from 'react-animate-on-scroll';
import Carousel from './Carousel'
import walterWhiteJessie from '../../img/wwjp.png'
import bettercallsaul from '../../img/bettercall.png'
import { Animated } from "react-animated-css";
import RandomQuote from '../quotes/RandomQuote';
import Slider from './Slider'

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
    },
    title: {
        fontSize: '3rem'
    },
    container: {
        textAlign: 'center'
    },
    imgWWJP: {
        height: '300px'
    },

}));
const HomeScreen = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);

    const myRef = useRef(null)

    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    //scroll.scrollMore(600)
    return (
        <div>
            <div className={classes.root}>
                <div className={classes.container}>
                    <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
                        <img src={walterWhiteJessie} alt="" className={classes.imgWWJP} />
                        <img src={bettercallsaul} alt="" className={classes.imgWWJP} />
                        <Animated animationIn="bounce" animationInDuration={4000} isVisible={true}>
                            <IconButton onClick={executeScroll}>
                                <ExpandMoreIcon style={{ fontSize: 60 }} color="secondary" />
                            </IconButton>
                        </Animated>
                        <RandomQuote />
                    </ScrollAnimation>
                </div>
            </div>
            <div ref={myRef}>
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
                    <Slider />
                </ScrollAnimation>
            </div>
            <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
                <h1 className="text-center mt-5 mb-5">Series</h1>
                <Carousel />

            </ScrollAnimation>
            <div>
            </div>

        </div>

    )
}

export default HomeScreen
