import ACTIONS from '../actionTypes/dashboard';

const updateSelectedProduct = (_id) => ({
  type: ACTIONS.SELECTED_PRODUCT,
  payload: {
    _id
  }
});

const updateProductionBatches = (batches) => ({
  type: ACTIONS.PRODUCTION_BATCHES,
  payload: {
    batches
  }
});

const addOrder = (order) => ({
  type: ACTIONS.ADD_ORDER,
  payload: {
    order
  }
});

const deleteOrder = (order) => ({
  type: ACTIONS.DELETE_ORDER,
  payload: {
    order
  }
});

const shiftOrder = (index) => ({
  type: ACTIONS.SHIFT_ORDER,
  payload: {
    index
  }
});

const unshiftOrder = (index) => ({
  type: ACTIONS.UNSHIFT_ORDER,
  payload: {
    index
  }
});

export {
  updateSelectedProduct,
  updateProductionBatches,
  addOrder,
  deleteOrder,
  shiftOrder,
  unshiftOrder
};