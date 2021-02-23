import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { characterListReducer, characterDetailsReducer, episodeBrbaListReducer  } from './reducers/characterReducers'

const reducer = combineReducers({
  characterList: characterListReducer,
  characterDetails: characterDetailsReducer,
  episodeBrbaList: episodeBrbaListReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store