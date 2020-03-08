import ACTIONS from '../../store/actionTypes/customers'

const initialState = {
  loading: false,
  customers: [],
  error: null
}

const customersReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTIONS.GET_CUSTOMERS: 
      return {
        ...state,
        loading: true,
        error: null
      }
    case ACTIONS.RECEIVE_CUSTOMERS:
      return {
        ...state,
        customers: action.payload.customers,
        loading: false,
        error: null
      }
    case ACTIONS.ADD_LOCAL:
      return {
        ...state,
        customers: [
          ...state.customers,
          action.payload.customer
        ]
      }
    default:
      return state
  }
}

export default customersReducer