import ACTIONS from '../actionTypes/customers';

// GET request
const getCustomers = () => ({
  type: ACTIONS.GET_CUSTOMERS
});

const receiveCustomers = (customers) => ({
  type: ACTIONS.RECEIVE_CUSTOMERS,
  payload: {
    customers
  }
});

// POST request
const addCustomer = (customer) => ({
  type: ACTIONS.ADD_CUSTOMER,
  payload: {
    customer
  }
});

const addLocal = (customer) => ({
  type: ACTIONS.ADD_CLOCAL,
  payload: {
    customer
  }
});

// DELETE request
const deleteCustomer = (_id) => ({
  type: ACTIONS.DELETE_CUSTOMER,
  payload: {
    _id
  }
});

const deleteLocal = (_id) => ({
  type: ACTIONS.DELETE_CLOCAL,
  payload: {
    _id
  }
});

// PUT request
const updateCustomer = (customer) => ({
  type: ACTIONS.UPDATE_CUSTOMER,
  payload: {
    customer
  }
});

const updateLocal = (customer) => ({
  type: ACTIONS.UPDATE_CLOCAL,
  payload: {
    customer
  }
});

// utils
const updateCurrentCustomer = (_id) => ({
  type: ACTIONS.CURRENT_CUSTOMER,
  payload: {
    _id
  }
});

// POST request -> product
const addProduct = (_id, product) => ({
  type: ACTIONS.ADD_CPRODUCT,
  payload: {
    _id,
    product
  }
});

const addProductLocal = (_id, product) => ({
  type: ACTIONS.ADD_CPLOCAL,
  payload: {
    _id,
    product
  }
});

// DELETE request -> product
// @params product -> { _id: <customer.products[i].product_id> }
const deleteProduct = (_id, product) => ({
  type: ACTIONS.DELETE_CPRODUCT,
  payload: {
    _id,
    product
  }
});

const deleteProductLocal = (_id, product) => ({
  type: ACTIONS.DELETE_CPLOCAL,
  payload: {
    _id,
    product
  }
});

// UPDATE request -> product
const updateProduct = (_id, product) => ({
  type: ACTIONS.UPDATE_CPRODUCT,
  payload: {
    _id,
    product
  }
});

const updateProductLocal = (_id, product) => ({
  type: ACTIONS.UPDATE_CPLOCAL,
  payload: {
    _id,
    product
  }
});

export {
  // api
  getCustomers,
  receiveCustomers,
  addCustomer,
  addLocal,
  deleteCustomer,
  deleteLocal,
  updateCustomer,
  updateLocal,
  // utils
  updateCurrentCustomer,
  // products
  addProduct,
  addProductLocal,
  deleteProduct,
  deleteProductLocal,
  updateProduct,
  updateProductLocal
};