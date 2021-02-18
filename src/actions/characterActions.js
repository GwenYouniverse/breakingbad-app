import axios from 'axios'
import {
    CHARACTER_LIST_REQUEST,
    CHARACTER_LIST_SUCCESS,
    CHARACTER_LIST_FAIL,
    CHARACTER_DETAILS_SUCCESS,
    CHARACTER_DETAILS_FAIL,
    CHARACTER_DETAILS_REQUEST
} from '../constants/charactersConstants'

export const listCharacters = () => async (dispatch) => {
    try {
        dispatch({ type: CHARACTER_LIST_REQUEST })

        const { data } = await axios.get('https://breakingbadapi.com/api/characters')

        dispatch({
            type: CHARACTER_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CHARACTER_LIST_FAIL,
            payload: error
        })
    }
}

export const listCharacterDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: CHARACTER_DETAILS_REQUEST })

        const { data } = await axios.get(`https://breakingbadapi.com/api/characters/${id}`)

        dispatch({
            type: CHARACTER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CHARACTER_DETAILS_FAIL,
            payload: error
        })
    }
}