import ACTIONS from '../actionTypes/products'

const getProducts = () => ({
  type: ACTIONS.GET_PRODUCTS
})

const receiveProducts = (products) => ({
  type: ACTIONS.RECEIVE_PRODUCTS,
  payload: {
    products
  }
})

const addProduct = (product) => ({
  type: ACTIONS.ADD_PRODUCT,
  payload: {
    product
  }
})

const deleteProduct = (id) => ({
  type: ACTIONS.DELETE_PRODUCT,
  payload: {
    id
  }
})

const updateProduct = (product) => ({
  type: ACTIONS.UPDATE_PRODUCT,
  payload: {
    product
  }
})

const errorProducts = (error) => ({
  type: ACTIONS.ERROR_PRODUCTS,
  payload: {
    error
  }
})

const searchProducts = (searchKey) => ({
  type: ACTIONS.SEARCH_PRODUCTS,
  payload: {
    searchKey
  }
})

const sortProducts = (sortKey) => ({
  type: ACTIONS.SORT_PRODUCTS,
  payload: {
    sortKey
  }
})

export { getProducts, receiveProducts, addProduct, deleteProduct, updateProduct, errorProducts, searchProducts, sortProducts }
