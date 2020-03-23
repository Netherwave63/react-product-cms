import productsReducer from './productsReducer';
import customersReducer from './customersReducer';
import dashboardReducer from './dashboardReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  productsState: productsReducer,
  customersState: customersReducer,
  dashboardState: dashboardReducer
});

export default rootReducer;
