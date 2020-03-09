import ACTIONS from '../actionTypes/customers'

const addCustomer = (customer) => ({
  type: ACTIONS.ADD_CUSTOMER,
  payload: {
    customer
  }
})

const addLocal = (customer) => ({
  type: ACTIONS.ADD_LOCAL,
  payload: {
    customer
  }
})

const getCustomers = () => ({
  type: ACTIONS.GET_CUSTOMERS
})

const receiveCustomers = (customers) => ({
  type: ACTIONS.RECEIVE_CUSTOMERS,
  payload: {
    customers
  }
})

const deleteCustomer = (id) => ({
  type: ACTIONS.DELETE_CUSTOMER,
  payload: {
    id
  }
})

const deleteLocal = (id) => ({
  type: ACTIONS.DELETE_LOCAL,
  payload: {
    id
  }
})

const updateCustomer = (customer) => ({
  type: ACTIONS.UPDATE_CUSTOMER,
  payload: {
    customer
  }
})

const updateLocal = (customer) => ({
  type: ACTIONS.UPDATE_LOCAL,
  payload: {
    customer
  }
})

const searchCustomers = (searchKey) => ({
  type: ACTIONS.SEARCH_CUSTOMERS,
  payload: {
    searchKey
  }
})

const addNewProduct = (id, product) => ({
  type: ACTIONS.ADD_NEW_PRODUCT,
  payload: {
    id,
    product
  }
})

const addLocalProduct = (id, product) => ({
  type: ACTIONS.ADD_LOCAL_PRODUCT,
  payload: {
    id,
    product
  }
})

const updateEntryProduct = (id, product) => ({
  type: ACTIONS.UPDATE_ENTRY_PRODUCT,
  payload: {
    id,
    product
  }
})

const updateLocalProduct = (id, product) => ({
  type: ACTIONS.UPDATE_LOCAL_PRODUCT,
  payload: {
    id,
    product
  }
})

const deleteEntryProduct = (customerId, productId) => ({
  type: ACTIONS.DELETE_ENTRY_PRODUCT,
  payload: {
    customerId,
    productId
  }
})

const deleteLocalProduct = (customerId, productId) => ({
  type: ACTIONS.DELETE_LOCAL_PRODUCT,
  payload: {
    customerId,
    productId
  }
})

const sortCustomers = (sortKey) => ({
  type: ACTIONS.SORT_CUSTOMERS,
  payload: {
    sortKey
  }
})

const sortProducts = (sortKey) => ({
  type: ACTIONS.SORT_PRODUCTS,
  payload: {
    sortKey
  }
})

export {
  addCustomer,
  addLocal,
  getCustomers,
  receiveCustomers,
  deleteCustomer,
  deleteLocal,
  updateCustomer,
  updateLocal,
  searchCustomers,
  addNewProduct,
  addLocalProduct,
  updateEntryProduct,
  updateLocalProduct,
  deleteEntryProduct,
  deleteLocalProduct,
  sortCustomers,
  sortProducts
}
