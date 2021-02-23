import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listCharacters } from '../../actions/characterActions'
import CharacterItem from './CharacterItem'
import Loader from '../ui/Loader'
import { Grid, Card, CardContent } from '@material-ui/core';
import logo from '../../img/logo.png'
import Pagination from './Pagination'
import Search from './Search'
import ScrollAnimation from 'react-animate-on-scroll';

const Characters = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [charactersPerPage] = useState(6)
    const [query, setQuery] = useState('');

    const dispatch = useDispatch()
    const characterList = useSelector(state => state.characterList)
    const { loading, error, characters } = characterList

    useEffect(() => {
        dispatch(listCharacters(query))
    }, [dispatch, query])

    //  Prikazivanje 10 karaktera po strani, paginacija
    const indexOfLastChar = currentPage * charactersPerPage
    const indexOfFistChar = indexOfLastChar - charactersPerPage
    const currentChar = characters.slice(indexOfFistChar, indexOfLastChar)

    const paginate = (pageNumbers) => {
        setCurrentPage(pageNumbers)
        window.scrollTo(0, 100);
    }

    return (
        <div >
            <h1 style={{ color: 'white' }} className="text-center m-4"><img
                width="250"
                height="150"
                src={logo} alt="" /></h1>
            <Search getQuery={(q) => setQuery(q)} />
            {loading ? <Loader /> : error ? (<h3>{error}</h3>) : (

                    <Grid container spacing={6}>
                        {currentChar.map((character) => (

                            <Grid item xs={12} sm={6} md={4} lg={4} key={character.char_id}>
                                <ScrollAnimation animateIn="fadeIn" >
                                    <CharacterItem character={character} />
                                </ScrollAnimation>
                            </Grid>
                        ))}

                    </Grid>
            )}

            <Pagination
                charactersPerPage={charactersPerPage}
                totalCharacters={characters.length}
                paginate={paginate} />
        </div>
    )
}


export default Characters
