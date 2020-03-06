import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import ACTIONS from '../actionTypes/products'
import { receiveProducts, getProducts } from '../actionCreators/products'

function* watchProducts() {
  yield takeLatest(ACTIONS.GET_PRODUCTS, fetchProducts)
  yield takeEvery(ACTIONS.ADD_PRODUCT, addProduct)
  yield takeEvery(ACTIONS.DELETE_PRODUCT, deleteProduct)
  yield takeEvery(ACTIONS.UPDATE_PRODUCT, updateProduct)
}

function* fetchProducts() {
  try {
    const res = yield axios.get('https://products-cms.herokuapp.com/api/v1/products')
    yield put(receiveProducts(res.data.data))
  } catch (err) {
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
    yield axios.post('https://products-cms.herokuapp.com/api/v1/products', {
      name,
      packaging_material,
      packaging_method
    })
    yield put(getProducts())
  } catch (err) {
    console.log(err)
  }
}

function* deleteProduct(action) {
  try {
    yield axios.delete(`https://products-cms.herokuapp.com/api/v1/products/${action.payload.id}`)
    yield put(getProducts())
  } catch (err) {
    console.log(err)
  }
}

function* updateProduct(action) {
  try {
    const {
      _id,
      name,
      packaging_material,
      packaging_method
    } = action.payload.product
    yield axios.put(`https://products-cms.herokuapp.com/api/v1/products/${_id}`, {
      name,
      packaging_material,
      packaging_method
    })
    yield put(getProducts())
  } catch (err) {
    console.log(err)
  }
}

export default watchProducts
