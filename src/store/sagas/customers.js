import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import ACTIONS from '../actionTypes/customers'
import { addLocal, receiveCustomers } from '../actionCreators/customers'

const baseURL = 'https://products-cms.herokuapp.com/api/v1/customers'
// const baseURL = 'http://localhost:5000/api/v1/customers'

function* watchCustomers() {
  yield takeLatest(ACTIONS.GET_CUSTOMERS, getCustomers)
  yield takeEvery(ACTIONS.ADD_CUSTOMER, addCustomer)
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

export default watchCustomers