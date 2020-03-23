import ACTIONS from '../actionTypes/dashboard';

const initialState = {
  selectedProduct: null,
  productionBatches: null,
  orders: []
};

const dashboardReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTIONS.SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload._id
      };
    case ACTIONS.PRODUCTION_BATCHES:
      return {
        ...state,
        productionBatches: action.payload.batches
      };
    case ACTIONS.ADD_ORDER:
      return {
        ...state,
        orders: [
          ...state.orders,
          action.payload.order
        ]
      };
    case ACTIONS.DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter(order => order.uuid !== action.payload.order.uuid)
      };
    case ACTIONS.SHIFT_ORDER:
      return doShiftOrder(state, action);
    case ACTIONS.UNSHIFT_ORDER:
      return doUnshiftOrder(state, action);
    default:
      return state;
  };
};

const doShiftOrder = (state, action) => {
  const { index } = action.payload;
  const newOrders = [...state.orders];
  const temp = newOrders[index];
  newOrders[index] = newOrders[index - 1];
  newOrders[index - 1] = temp;
  return {
    ...state,
    orders: newOrders
  };
};

const doUnshiftOrder = (state, action) => {
  const { index } = action.payload;
  const newOrders = [...state.orders];
  const temp = newOrders[index];
  newOrders[index] = newOrders[index + 1];
  newOrders[index + 1] = temp;
  return {
    ...state,
    orders: newOrders
  };
};

export default dashboardReducer;