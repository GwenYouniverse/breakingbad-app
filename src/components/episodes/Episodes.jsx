import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listBrbaEpisodes } from '../../actions/characterActions'
import Carousel from '../screens/Carousel'
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import BreakingBadEp from './BreakingBadEp';
import Loader from '../ui/Loader';

const Episodes = () => {
    const dispatch = useDispatch()
    const episodeBrbaList = useSelector(state => state.episodeBrbaList)
    const { loading, error, episodesBrba } = episodeBrbaList

    // useEffect(() => {
    //     dispatch(listEpisodes())
    // }, [dispatch])

    const displayBrba = () => {
        dispatch(listBrbaEpisodes())
    }

    return (
        <div className="mt-5">
            <Carousel handleClick={displayBrba} />
            {loading ? <Loader /> : error ? (<h3>{error}</h3>) : (
                <>
                {
                    episodesBrba.map(epBrba => (
                        <BreakingBadEp epBrba={epBrba} />
                    ))
                }
                </>
            )}
        </div>
    )
}

export default Episodes
