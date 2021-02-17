import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listCharacters } from '../../actions/characterActions'
import { Col, Row } from 'react-bootstrap';
import CharacterItem from './CharacterItem'
import Loader from '../ui/Loader'
import { Grid, Card, CardContent } from '@material-ui/core';

import logo from '../../img/logo.png'


const Characters = () => {
    const dispatch = useDispatch()

    const characterList = useSelector(state => state.characterList)
    const { loading, error, characters } = characterList

    useEffect(() => {
        dispatch(listCharacters())
    }, [dispatch])

    //  key={character.char_id} sm={12} md={6} lg={4} xl={3}

    return (
        <div>


            <h1 style={{ color: 'white' }} className="text-center m-4"><img
                width="250"
                height="150"
                src={logo} alt="" /></h1>
            {loading ? <Loader /> : error ? (<h3>{error}</h3>) : (
                <Grid container spacing={6}>
                    {characters.map((character) => (

                        <Grid item xs={12} sm={6} md={4} lg={4} key={character.char_id}>
                            <CharacterItem character={character}></CharacterItem>
                        </Grid>

                    ))}
                </Grid>
            )}


        </div>
    )
}

export default Characters
