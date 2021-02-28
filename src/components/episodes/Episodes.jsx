import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listBrbaEpisodes } from '../../actions/characterActions'
import { listBcsEpisodes } from '../../actions/characterActions'
import Carousel from '../screens/Carousel'
import BreakingBadEp from './BreakingBadEp';
import Loader from '../ui/Loader';
import BetterCallSaulEp from './BetterCallSaulEp'
import ScrollAnimation from 'react-animate-on-scroll';

const Episodes = () => {
    const dispatch = useDispatch()
    const episodeBrbaList = useSelector(state => state.episodeBrbaList)
    const { loading, error, episodesBrba } = episodeBrbaList
    const episodeBcsList = useSelector(state => state.episodeBcsList)
    const { loadingBcs, errorBcs, episodesBcs } = episodeBcsList

    const displayBrba = () => {
        dispatch(listBrbaEpisodes())
    }

    const displayBcs = () => {
        { console.log(window.location.search) }
        dispatch(listBcsEpisodes())
    }

    useEffect(() => {
        window.scrollTo(0, 0);

    }, []);

    return (
        <div>
            <Carousel handleClickBrba={displayBrba} handleClickBcs={displayBcs} />
            <div className="mt-3">
                {loading ? <Loader /> : error ? (<h3>{error}</h3>) : (
                    <>

                        {episodesBrba.length === 0 || window.location.search !== '?series=Breaking+Bad' ? null : (
                            <ScrollAnimation animateIn="fadeIn" >
                                <BreakingBadEp epBrba={episodesBrba} />
                            </ScrollAnimation>

                        )}

                    </>
                )}

                {loadingBcs ? <Loader /> : errorBcs ? (<h3>{errorBcs}</h3>) : (
                    <>

                        {episodesBcs.length === 0 || window.location.search !== '?series=Better+Call+Saul' ? null : (
                            <ScrollAnimation animateIn="fadeIn" >
                                <BetterCallSaulEp epBcs={episodesBcs} />
                            </ScrollAnimation>
                        )}
                    </>
                )}
            </div>

        </div>
    )
}

export default Episodes
