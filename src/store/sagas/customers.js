import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import ACTIONS from '../actionTypes/customers';
import * as CUSTOMERS from '../actionCreators/customers';

const baseURL = 'https://products-cms.herokuapp.com/api/v1/customers'
// const baseURL = 'http://localhost:5000/api/v1/customers';

function* watchCustomers() {
  yield takeLatest(ACTIONS.GET_CUSTOMERS, getCustomers);
  yield takeEvery(ACTIONS.ADD_CUSTOMER, addCustomer);
  yield takeEvery(ACTIONS.DELETE_CUSTOMER, deleteCustomer);
  yield takeEvery(ACTIONS.UPDATE_CUSTOMER, updateCustomer);
  yield takeEvery(ACTIONS.ADD_CPRODUCT, addProduct);
  yield takeEvery(ACTIONS.DELETE_CPRODUCT, deleteProduct);
  yield takeEvery(ACTIONS.UPDATE_CPRODUCT, updateProduct);
}

// GET request
function* getCustomers() {
  try {
    const res = yield axios.get(baseURL);
    const customers = res.data.data;
    console.log(customers);
    yield put(CUSTOMERS.receiveCustomers(customers));
  } catch (error) {
    console.log(error);
  }
}

// POST request
function* addCustomer(action) {
  try {
    const res = yield axios.post(baseURL, action.payload.customer);
    const customer = res.data.data;
    yield put(CUSTOMERS.addLocal(customer));
  } catch (error) {
    console.log(error);
  }
}

// DELETE request
function* deleteCustomer(action) {
  try {
    yield axios.delete(baseURL + '/' + action.payload._id);
    yield put(CUSTOMERS.deleteLocal(action.payload._id));
  } catch (error) {
    console.log(error);
  }
}

// PUT request
function* updateCustomer(action) {
  try {
    const res = yield axios.put(
      baseURL + '/' + action.payload.customer._id,
      action.payload.customer
    );
    const customer = res.data.data;
    yield put(CUSTOMERS.updateLocal(customer));
  } catch (error) {
    console.log(error);
  }
}

// POST request -> product
function* addProduct(action) {
  try {
    const res = yield axios.post(
      baseURL + '/products/' + action.payload._id,
      action.payload.product
    );
    const product = res.data.data;
    yield put(CUSTOMERS.addProductLocal(action.payload._id, product));
  } catch (error) {
    console.log(error);
  }
}

// DELETE request -> product
function* deleteProduct(action) {
  try {
    yield axios.delete(
      baseURL + '/' + action.payload._id + '/products/' + action.payload.product._id
    );
    yield put(CUSTOMERS.deleteProductLocal(action.payload._id, action.payload.product));
  } catch (error) {
    console.log(error);
  }
}

// PUT request -> product
function* updateProduct(action) {
  try {
    const res = yield axios.put(
      baseURL + '/products/' + action.payload._id,
      action.payload.product
    );
    const product = res.data.data;
    yield put(CUSTOMERS.updateProductLocal(action.payload._id, product));
  } catch (error) {
    console.log(error);
  }
}

export default watchCustomers;