import { all } from 'redux-saga/effects';
import watchProducts from './products';
import watchCustomers from './customers';

function* rootSaga() {
  yield all([
    watchProducts(),
    watchCustomers()
  ]);
};

export default rootSaga;
