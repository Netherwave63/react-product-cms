import ACTIONS from '../actionTypes/products';

// GET request
const getProducts = () => ({
  type: ACTIONS.GET_PRODUCTS
});

const receiveProducts = (products) => ({
  type: ACTIONS.RECEIVE_PRODUCTS,
  payload: {
    products
  }
});

// POST request
const addProduct = (product) => ({
  type: ACTIONS.ADD_PRODUCT,
  payload: {
    product
  }
});

const addLocal = (product) => ({
  type: ACTIONS.ADD_LOCAL,
  payload: {
    product
  }
});

// DELETE request
const deleteProduct = (_id) => ({
  type: ACTIONS.DELETE_PRODUCT,
  payload: {
    _id
  }
});

const deleteLocal = (_id) => ({
  type: ACTIONS.DELETE_LOCAL,
  payload: {
    _id
  }
});

// PUT request
const updateProduct = (product) => ({
  type: ACTIONS.UPDATE_PRODUCT,
  payload: {
    product
  }
});

const updateLocal = (product) => ({
  type: ACTIONS.UPDATE_LOCAL,
  payload: {
    product
  }
});

export {
  getProducts,
  receiveProducts,
  addProduct,
  addLocal,
  deleteProduct,
  deleteLocal,
  updateProduct,
  updateLocal
};
