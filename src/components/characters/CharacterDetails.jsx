import React, { useEffect } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { listCharacterDetails } from '../../actions/characterActions'
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import Loader from '../ui/Loader';
import AcordionInfo from './AcordionInfo'
import AuthorQuotes from '../quotes/AuthorQuotes';

const CharacterDetails = ({ match }) => {
    const dispatch = useDispatch()

    const characterDetails = useSelector(state => state.characterDetails)
    const { loading, error, character } = characterDetails

    useEffect(() => {
        dispatch(listCharacterDetails(match.params.id))
    }, [dispatch, match])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // The API returns array of single object with given id like this:  character: [{...}]

    return (

        <div>
            <Link className="btn btn-light my-4" to='/characters'>Go back</Link>
            {loading ? <Loader /> : error ? <h1>Some error</h1> : (
                <Grid container spacing={3}>
                    <Grid item lg={6} md={6} xs={12} sm={12}>
                        <img className="detailsimg my-1 imageFade" src={character[0].img} alt="" />
                    </Grid>

                    <Grid item lg={6} md={6} xs={12} sm={12}>
                        <h1 className="my-1 mb-5">{character[0].name}</h1>
                        <AcordionInfo character={character} />
                    </Grid>

                    <Grid item lg={12} md={12} xs={12} sm={12}>
                        <AuthorQuotes name={character[0].name} />
                    </Grid>

                </Grid>
            )}


        </div>
    )
}

export default CharacterDetails
