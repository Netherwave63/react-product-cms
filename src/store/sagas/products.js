import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import ACTIONS from '../actionTypes/products'
import { receiveProducts, addLocal, deleteLocal, updateLocal } from '../actionCreators/products'

const baseURL = 'https://products-cms.herokuapp.com/api/v1/products'
// const baseURL = 'http://localhost:5000/api/v1/products'

function* watchProducts() {
  yield takeLatest(ACTIONS.GET_PRODUCTS, fetchProducts)
  yield takeEvery(ACTIONS.ADD_PRODUCT, addProduct)
  yield takeEvery(ACTIONS.DELETE_PRODUCT, deleteProduct)
  yield takeEvery(ACTIONS.UPDATE_PRODUCT, updateProduct)
}

function* fetchProducts() {
  try {
    const res = yield axios.get(baseURL)
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
      packaging_method,
      weight_per_batch
    } = action.payload.product
    const res = yield axios.post(baseURL, {
      name,
      packaging_material,
      packaging_method,
      weight_per_batch
    })
    yield put(addLocal(res.data.data))
  } catch (err) {
    console.log(err)
  }
}

function* deleteProduct(action) {
  try {
    yield axios.delete(`${baseURL}/${action.payload.id}`)
    yield put(deleteLocal(action.payload.id))
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
      packaging_method,
      weight_per_batch
    } = action.payload.product
    const res = yield axios.put(`${baseURL}/${_id}`, {
      name,
      packaging_material,
      packaging_method,
      weight_per_batch
    })
    yield put(updateLocal(res.data.data))
  } catch (err) {
    console.log(err)
  }
}

export default watchProducts
