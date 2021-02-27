import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listRandomQuote } from '../../actions/characterActions'
import ScrollAnimation from 'react-animate-on-scroll';

const RandomQuote = () => {
    const dispatch = useDispatch()
    const randomQuoteList = useSelector(state => state.randomQuoteList)
    const { loading, error, quote } = randomQuoteList

    useEffect(() => {
        dispatch(listRandomQuote())
    }, [dispatch])

    return (
        <div>
            {loading ? null : (
                <ScrollAnimation animateIn="fadeIn" >
                    <div className="w3-container">
                        <div className="w3-panel w3-leftbar quote-div">
                            <p className="w3-xlarge w3-serif"><i>{`${quote[0].quote}`}</i></p>
                            <p>{`- ${quote[0].author}`}</p>
                        </div>
                    </div>
                </ScrollAnimation>
            )}
        </div>

        //#F50057
    )
}

export default RandomQuote
