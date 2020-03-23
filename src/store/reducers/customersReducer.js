import ACTIONS from '../actionTypes/customers';

const initialState = {
  loading: false,
  customers: [],
  error: null,
  currentCustomer: null,
};

const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET request
    case ACTIONS.GET_CUSTOMERS:
      return {
        ...state,
        loading: true
      };
    case ACTIONS.RECEIVE_CUSTOMERS:
      return {
        ...state,
        loading: false,
        customers: action.payload.customers,
        currentCustomer: action.payload.customers.length ? action.payload.customers[0]._id : null
      };
    // POST request
    case ACTIONS.ADD_CLOCAL:
      return {
        ...state,
        customers: [
          ...state.customers,
          action.payload.customer
        ]
      };
    // DELETE request
    case ACTIONS.DELETE_CLOCAL:
      return {
        ...state,
        customers: state.customers.filter(customer => customer._id !== action.payload._id)
      };
    // PUT request
    case ACTIONS.UPDATE_CLOCAL:
      return {
        ...state,
        customers: state.customers.map(customer => customer._id === action.payload.customer._id ? action.payload.customer : customer)
      };
    // utils
    case ACTIONS.CURRENT_CUSTOMER:
      return {
        ...state,
        currentCustomer: action.payload._id
      };
    // POST request -> product
    case ACTIONS.ADD_CPLOCAL:
      return doAddProductLocal(state, action);
    // DELETE request -> product
    case ACTIONS.DELETE_CPLOCAL:
      return doDeleteProductLocal(state, action);
    // PUT request -> product
    case ACTIONS.UPDATE_CPLOCAL:
      return doUpdateProductLocal(state, action);
    default:
      return state;
  }
};

// utils
function doAddProductLocal(state, action) {
  return {
    ...state,
    customers: state.customers.map(customer => {
      if (customer._id === action.payload._id) {
        return {
          ...customer,
          products: [
            ...customer.products,
            action.payload.product
          ]
        };
      } else {
        return customer;
      }
    })
  };
}

function doDeleteProductLocal(state, action) {
  return {
    ...state,
    customers: state.customers.map(customer => {
      if (customer._id === action.payload._id) {
        return {
          ...customer,
          products: customer.products.filter(product => product._id !== action.payload.product._id)
        };
      } else {
        return customer;
      }
    })
  };
}

function doUpdateProductLocal(state, action) {
  return {
    ...state,
    customers: state.customers.map(customer => {
      if (customer._id === action.payload._id) {
        return {
          ...customer,
          products: customer.products.map(product => product._id === action.payload.product._id ? action.payload.product : product)
        };
      } else {
        return customer;
      }
    })
  };
}

export default customersReducer;