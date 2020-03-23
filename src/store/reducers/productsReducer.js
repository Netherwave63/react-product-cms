import ACTIONS from '../actionTypes/products';

const initialState = {
  loading: false,
  products: [],
  error: null
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET request
    case ACTIONS.GET_PRODUCTS:
      return {
        ...state,
        loading: true
      };
    case ACTIONS.RECEIVE_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload.products
      };
    // POST request
    case ACTIONS.ADD_LOCAL:
      return {
        ...state,
        products: [
          ...state.products,
          action.payload.product
        ]
      };
    // DELETE request
    case ACTIONS.DELETE_LOCAL:
      return {
        ...state,
        products: state.products.filter(product => product._id !== action.payload._id)
      };
    // PUT request
    case ACTIONS.UPDATE_LOCAL:
      return {
        ...state,
        products: state.products.map(product => product._id === action.payload.product._id ? action.payload.product : product)
      };
    default:
      return state;
  }
};

export default productsReducer;
