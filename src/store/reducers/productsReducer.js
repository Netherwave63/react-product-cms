import ACTIONS from '../actionTypes/products'

const initialState = {
  loading: false,
  products: [],
  error: null
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return {
        ...state,
        loading: true,
        error: null
      }
    case ACTIONS.RECEIVE_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        loading: false,
        error: null
      }
    case ACTIONS.ERROR_PRODUCTS:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state
  }
}

export default productsReducer
