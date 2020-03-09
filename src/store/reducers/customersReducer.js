import ACTIONS from '../../store/actionTypes/customers'

const initialState = {
  loading: false,
  customers: [],
  error: null,
  searchKey: '',
  sortKey_customers: null,
  sortKey_products: null
}

const customersReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case ACTIONS.DELETE_LOCAL:
      return {
        ...state,
        customers: state.customers.filter(customer => customer._id !== action.payload.id)
      }
    case ACTIONS.UPDATE_LOCAL:
      return {
        ...state,
        customers: state.customers.map(customer => customer._id === action.payload.customer._id ? action.payload.customer : customer)
      }
    case ACTIONS.SEARCH_CUSTOMERS:
      return {
        ...state,
        searchKey: action.payload.searchKey
      }
    case ACTIONS.ADD_LOCAL_PRODUCT:
      return doAddLocalProduct(state, action)
    case ACTIONS.UPDATE_LOCAL_PRODUCT:
      return doUpdateLocalProduct(state, action)
    case ACTIONS.DELETE_LOCAL_PRODUCT:
      return doDeleteLocalProduct(state, action)
    case ACTIONS.SORT_CUSTOMERS:
      return doApplySortCustomers(state, action)
    case ACTIONS.SORT_PRODUCTS:
      return {
        ...state,
        sortKey_products: action.payload.sortKey
      }
    default:
      return state
  }
}

const doAddLocalProduct = (state, action) => {
  const {
    id,
    product
  } = action.payload
  return {
    ...state,
    customers: state.customers.map(customer => {
      if (customer._id === id) {
        return {
          ...customer,
          products: [
            ...customer.products,
            product
          ]
        }
      } else {
        return customer
      }
    })
  }
}

const doUpdateLocalProduct = (state, action) => {
  const {
    id,
    product
  } = action.payload
  const {
    _id,
    name,
    weight_per_package,
    package_per_carton
  } = product
  return {
    ...state,
    customers: state.customers.map(customer => {
      if (customer._id === id) {
        return {
          ...customer,
          products: customer.products.map(p => {
            if (p._id === _id) {
              return {
                ...p,
                name,
                weight_per_package,
                package_per_carton
              }
            } else {
              return p
            }
          })
        }
      } else {
        return customer
      }
    })
  }
}

const doDeleteLocalProduct = (state, action) => {
  const {
    customerId,
    productId
  } = action.payload
  return {
    ...state,
    customers: state.customers.map(customer => {
      if (customer._id === customerId) {
        return {
          ...customer,
          products: customer.products.filter(product => product._id !== productId)
        }
      } else {
        return customer
      }
    })
  }
}

function doApplySortCustomers(state, action) {
  const sortKey_customers = action.payload.sortKey
  return {
    ...state,
    customers: sortKey_customers ? state.customers.sort((a, b) => a.name < b.name ? -1 : 1) : state.customers.sort((a, b) => a.name > b.name ? -1 : 1),
    sortKey_customers
  }
}

export default customersReducer
