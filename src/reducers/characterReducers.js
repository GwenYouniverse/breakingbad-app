import {
    CHARACTER_LIST_REQUEST,
    CHARACTER_LIST_SUCCESS,
    CHARACTER_LIST_FAIL,
    CHARACTER_DETAILS_REQUEST,
    CHARACTER_DETAILS_SUCCESS,
    CHARACTER_DETAILS_FAIL,
    EPISODE_BRBA_REQUEST,
    EPISODE_BRBA_SUCCESS,
    EPISODE_BRBA_FAIL,
    EPISODE_BCS_REQUEST,
    EPISODE_BCS_SUCCESS,
    EPISODE_BCS_FAIL,
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

export const characterDetailsReducer = (state = { character: [{ occupation: [], appearance: [], }] }, action) => {
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

export const episodeBrbaListReducer = (state = { episodesBrba: [] }, action) => {
    switch (action.type) {
        case EPISODE_BRBA_REQUEST:
            return { loading: true, episodesBrba: [] }
        case EPISODE_BRBA_SUCCESS:
            return { loading: false, episodesBrba: action.payload }
        case EPISODE_BRBA_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
    }
}

export const episodeBcsListReducer = (state = { episodesBcs: [] }, action) => {
    switch (action.type) {
        case EPISODE_BCS_REQUEST:
            return { loadingBcs: true, episodesBcs: [] }
        case EPISODE_BCS_SUCCESS:
            return { loadingBcs: false, episodesBcs: action.payload }
        case EPISODE_BCS_FAIL:
            return { loadingBcs: false, errorBcs: action.payload };
        default:
            return state
    }
}


