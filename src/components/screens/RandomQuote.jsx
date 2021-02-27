import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listRandomQuote } from '../../actions/characterActions'
import Typical from 'react-typical'

const RandomQuote = () => {
    const dispatch = useDispatch()
    const randomQuoteList = useSelector(state => state.randomQuoteList)
    const { loading, error, quote } = randomQuoteList

    useEffect(() => {
        dispatch(listRandomQuote())
    }, [dispatch])

    return (
        <div>
            <p>{quote[0].quote}</p>
            <p>{`- ${quote[0].author}`}</p>
        </div>

        //#F50057
    )
}

export default RandomQuote
