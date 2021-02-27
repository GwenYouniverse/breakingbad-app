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
            <h1>{quote[0].quote}</h1>
            <h1>{`- ${quote[0].author}`}</h1>
        </div>
    )
}

export default RandomQuote
