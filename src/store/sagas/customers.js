import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import ACTIONS from '../actionTypes/customers'
import { addLocal, deleteLocal, updateLocal, receiveCustomers, addLocalProduct, updateLocalProduct, deleteLocalProduct } from '../actionCreators/customers'

const baseURL = 'https://products-cms.herokuapp.com/api/v1/customers'
// const baseURL = 'http://localhost:5000/api/v1/customers'

function* watchCustomers() {
  yield takeLatest(ACTIONS.GET_CUSTOMERS, getCustomers)
  yield takeEvery(ACTIONS.ADD_CUSTOMER, addCustomer)
  yield takeEvery(ACTIONS.DELETE_CUSTOMER, deleteCustomer)
  yield takeEvery(ACTIONS.UPDATE_CUSTOMER, updateCustomer)
  yield takeEvery(ACTIONS.ADD_NEW_PRODUCT, addNewProduct)
  yield takeEvery(ACTIONS.UPDATE_ENTRY_PRODUCT, updateEntryProduct)
  yield takeEvery(ACTIONS.DELETE_ENTRY_PRODUCT, deleteEntryProduct)
}

function* addCustomer(action) {
  try {
    const res = yield axios.post(baseURL, action.payload.customer)
    yield put(addLocal(res.data.data))
  } catch (error) {
    console.log(error)
  }
}

function* getCustomers() {
  try {
    const res = yield axios.get(baseURL)
    yield put(receiveCustomers(res.data.data))
  } catch (error) {
    console.log(error)
  }
}

function* deleteCustomer(action) {
  try {
    yield axios.delete(`${baseURL}/${action.payload.id}`)
    yield put(deleteLocal(action.payload.id))
  } catch (error) {
    console.log(error)
  }
}

function* updateCustomer(action) {
  try {
    const res = yield axios.put(`${baseURL}/${action.payload.customer._id}`, action.payload.customer)
    yield put(updateLocal(res.data.data))
  } catch (error) {
    console.log(error)
  }
}

function* addNewProduct(action) {
  try {
    const res = yield axios.put(`${baseURL}/products/${action.payload.id}`, action.payload.product)
    yield put(addLocalProduct(action.payload.id, res.data.data))
  } catch (error) {
    console.log(error)
  }
}

function* updateEntryProduct(action) {
  try {
    const res = yield axios.put(`${baseURL}/products/${action.payload.id}`, action.payload.product)
    console.log('res: ', res)
    yield put(updateLocalProduct(action.payload.id, res.data.data))
  } catch (error) {
    console.log('error: ', error)
  }
}

function* deleteEntryProduct(action) {
  try {
    yield axios.delete(`${baseURL}/products/${action.payload.customerId}_${action.payload.productId}`)
    yield put(deleteLocalProduct(action.payload.customerId, action.payload.productId))
  } catch (error) {
    console.log(error)
  }
}

export default watchCustomers
