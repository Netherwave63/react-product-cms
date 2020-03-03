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

export { getProducts, receiveProducts, addProduct }