import axios from 'axios'
import {
    CHARACTER_LIST_REQUEST,
    CHARACTER_LIST_SUCCESS,
    CHARACTER_LIST_FAIL,
    CHARACTER_DETAILS_SUCCESS,
    CHARACTER_DETAILS_FAIL,
    CHARACTER_DETAILS_REQUEST,
    EPISODE_BRBA_REQUEST,
    EPISODE_BRBA_SUCCESS,
    EPISODE_BRBA_FAIL,
    EPISODE_BCS_REQUEST,
    EPISODE_BCS_SUCCESS,
    EPISODE_BCS_FAIL,
} from '../constants/charactersConstants'

export const listCharacters = (query) => async (dispatch) => {
    try {
        dispatch({ type: CHARACTER_LIST_REQUEST })

        const { data } = await axios.get(`https://breakingbadapi.com/api/characters?name=${query}`)

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

export const listBrbaEpisodes = () => async (dispatch) => {
    try {
        dispatch({ type: EPISODE_BRBA_REQUEST })

        const { data } = await axios.get(`https://breakingbadapi.com/api/episodes?series=Breaking+Bad`)

        dispatch({
            type: EPISODE_BRBA_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: EPISODE_BRBA_FAIL,
            payload: error
        })
    }
}


export const listBcsEpisodes = () => async (dispatch) => {
    try {
        dispatch({ type: EPISODE_BCS_REQUEST })

        const { data } = await axios.get('https://breakingbadapi.com/api/episodes?series=Better+Call+Saul')

        dispatch({
            type: EPISODE_BCS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: EPISODE_BCS_FAIL,
            payload: error
        })
    }
}
