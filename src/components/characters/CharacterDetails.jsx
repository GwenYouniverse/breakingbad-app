import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listCharacterDetails } from '../../actions/characterActions'


const CharacterDetails = ({ match }) => {
    const dispatch = useDispatch()

    const characterDetails = useSelector(state => state.characterDetails)
    const { loading, error, character } = characterDetails

    useEffect(() => {
        dispatch(listCharacterDetails(match.params.id))
    }, [dispatch, match])

    // The API returns array of single object with given id like this:  character: [{...}]

    return (

        <div>
            {console.log(character)}
            <h1 className="text-white">{character[0].name}</h1>
        </div>
    )
}

export default CharacterDetails
