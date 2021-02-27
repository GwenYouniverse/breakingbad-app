import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listBrbaEpisodes } from '../../actions/characterActions'
import { listBcsEpisodes } from '../../actions/characterActions'
import Carousel from '../screens/Carousel'
import BreakingBadEp from './BreakingBadEp';
import Loader from '../ui/Loader';
import BetterCallSaulEp from './BetterCallSaulEp'


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
        <div className="mt-5">
            {console.log(window.location.search)}
            <Carousel handleClickBrba={displayBrba} handleClickBcs={displayBcs} />
            {loading ? <Loader /> : error ? (<h3>{error}</h3>) : (
                <>

                    { episodesBrba.length === 0 || window.location.search !== '?series=Breaking+Bad' ? null : <BreakingBadEp epBrba={episodesBrba} />}

                </>
            )}

            {loadingBcs ? <Loader /> : errorBcs ? (<h3>{errorBcs}</h3>) : (
                <>

                    { episodesBcs.length === 0 || window.location.search !== '?series=Better+Call+Saul' ? null : <BetterCallSaulEp epBcs={episodesBcs} />}

                </>
            )}

        </div>
    )
}

export default Episodes
