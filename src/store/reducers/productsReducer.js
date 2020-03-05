import ACTIONS from '../actionTypes/products'

const initialState = {
  loading: false,
  products: [],
  error: null,
  searchKey: '',
  sortKey: null
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
    case ACTIONS.SEARCH_PRODUCTS:
      return {
        ...state,
        searchKey: action.payload.searchKey
      }
    case ACTIONS.SORT_PRODUCTS:
      return applySortProducts(state, action)
    default:
      return state
  }
}

function applySortProducts(state, action) {
  const sortKey = action.payload.sortKey
  return {
    ...state,
    products: sortKey ? state.products.sort((a, b) => a.name < b.name ? -1 : 1) : state.products.sort((a, b) => a.name > b.name ? -1 : 1),
    sortKey
  }
}

export default productsReducer
