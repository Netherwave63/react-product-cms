import productsReducer from './productsReducer'
import customersReducer from './customersReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  productsState: productsReducer,
  customersState: customersReducer
})

export default rootReducer
