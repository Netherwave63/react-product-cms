import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import ACTIONS from '../actionTypes/products'
import { receiveProducts, getProducts } from '../actionCreators/products'

function* watchProducts() {
  yield takeLatest(ACTIONS.GET_PRODUCTS, fetchProducts)
  yield takeEvery(ACTIONS.ADD_PRODUCT, addProduct)
}

function* fetchProducts() {
  try {
    const res = yield axios.get('/api/v1/products')
    yield put(receiveProducts(res.data.data))
  } catch(err) {
    console.log(err)
  }
}

function* addProduct(action) {
  try {
    const { 
      name, 
      packaging_material, 
      packaging_method 
    } = action.payload.product
    yield axios.post('/api/v1/products', {
      name,
      packaging_material,
      packaging_method
    })
    yield put(getProducts())
  } catch(err) {
    console.log(err)
  }
}

export default watchProducts