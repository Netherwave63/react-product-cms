import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import ACTIONS from '../actionTypes/products';
import * as PRODUCTS from '../actionCreators/products';
import * as DASHBOARD from '../actionCreators/dashboard';

const baseURL = 'https://products-cms.herokuapp.com/api/v1/products'
// const baseURL = 'http://localhost:5000/api/v1/products';

function* watchProducts() {
  yield takeLatest(ACTIONS.GET_PRODUCTS, getProducts);
  yield takeEvery(ACTIONS.ADD_PRODUCT, addProduct);
  yield takeEvery(ACTIONS.DELETE_PRODUCT, deleteProduct);
  yield takeEvery(ACTIONS.UPDATE_PRODUCT, updateProduct);
}

// GET request
function* getProducts() {
  try {
    const res = yield axios.get(baseURL);
    const products = res.data.data;
    yield put(PRODUCTS.receiveProducts(products));
    if (products.length) yield put(DASHBOARD.updateSelectedProduct(products[0]._id));
  } catch (error) {
    console.log(error);
  }
}

// POST request
function* addProduct(action) {
  try {
    const res = yield axios.post(baseURL, action.payload.product);
    const product = res.data.data;
    yield put(PRODUCTS.addLocal(product));
  } catch (error) {
    console.log(error);
  }
}

// DELETE request
function* deleteProduct(action) {
  try {
    yield axios.delete(baseURL + '/' + action.payload._id);
    yield put(PRODUCTS.deleteLocal(action.payload._id));
  } catch (error) {
    console.log(error);
  }
}

// PUT request
function* updateProduct(action) {
  try {
    const res = yield axios.put(
      baseURL + '/' + action.payload.product._id,
      action.payload.product
    );
    const product = res.data.data;
    yield put(PRODUCTS.updateLocal(product));
  } catch (error) {
    console.log(error);
  }
}

export default watchProducts;
