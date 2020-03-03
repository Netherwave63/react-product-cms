import { all } from 'redux-saga/effects'
import watchProducts from './products'

function* rootSaga() {
  yield all([
    watchProducts()
  ])
}

export default rootSaga
