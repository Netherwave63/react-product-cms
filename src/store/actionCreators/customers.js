import ACTIONS from '../actionTypes/customers'

const addCustomer = (customer) => ({
  type: ACTIONS.ADD_CUSTOMER,
  payload: {
    customer
  }
})

const addLocal = (customer) => ({
  type: ACTIONS.ADD_LOCAL,
  payload: {
    customer
  }
})

const getCustomers = () => ({
  type: ACTIONS.GET_CUSTOMERS
})

const receiveCustomers = (customers) => ({
  type: ACTIONS.RECEIVE_CUSTOMERS,
  payload: {
    customers
  }
})

export {
  addCustomer,
  addLocal,
  getCustomers,
  receiveCustomers
}