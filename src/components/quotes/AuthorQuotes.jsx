import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listAuthorQuote } from '../../actions/characterActions'
import ScrollAnimation from 'react-animate-on-scroll';

const AuthorQuotes = ({ name }) => {
    const dispatch = useDispatch()
    const authorQuoteList = useSelector(state => state.authorQuoteList)
    const { loading, error, quoteByAuthor } = authorQuoteList

    useEffect(() => {
        dispatch(listAuthorQuote(name))
    }, [dispatch, name])

    return (
        <div>
            {loading ? null : (
                 
                quoteByAuthor.map(quote => (
                    <ScrollAnimation animateIn="fadeIn" >
                    <div className="w3-container">
                        <div className="w3-panel w3-leftbar quote-div">
                            <p className="w3-xlarge w3-serif"><i>{`${quote.quote}`}</i></p>
                            <p>{`- ${quote.author}`}</p>
                        </div>
                    </div>
                    </ScrollAnimation>
                ))
            )}
        </div>
    )
}

export default AuthorQuotes
