import productsReducer from './productsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  productsState: productsReducer
})

export default rootReducer
