import {
    CHARACTER_LIST_REQUEST,
    CHARACTER_LIST_SUCCESS,
    CHARACTER_LIST_FAIL,
    CHARACTER_DETAILS_REQUEST,
    CHARACTER_DETAILS_SUCCESS,
    CHARACTER_DETAILS_FAIL
} from '../constants/charactersConstants'

export const characterListReducer = (state = { characters: [] }, action) => {
    switch (action.type) {
        case CHARACTER_LIST_REQUEST:
            return { loading: true, characters: [] }
        case CHARACTER_LIST_SUCCESS:
            return { loading: false, characters: action.payload }
        case CHARACTER_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
    }
}

export const characterDetailsReducer = (state = { character: [{ occupation: [], appearance: [],  }] }, action) => {
    switch (action.type) {
        case CHARACTER_DETAILS_REQUEST:
            return { loading: true, ...state }
        case CHARACTER_DETAILS_SUCCESS:
            return { loading: false, character: action.payload }
        case CHARACTER_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
    }
}