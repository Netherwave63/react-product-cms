import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addOrder } from '../../../store/actionCreators/dashboard';
import { v4 } from 'uuid';

const AddNew = ({
  // props
  customers,
  setIsActive,
  // dispatch
  addOrder
}) => {
  const [customerId, setCustomerId] = useState(customers[0]._id);
  const [customerOrders, setCustomerOrders] = useState('');

  const handleClick = () => {
    setIsActive(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (!customerOrders) return;
      handleSubmit();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addOrder({
      uuid: v4(),
      customerId,
      customerOrders
    });
    setIsActive(false);
  };

  return (
    <div className="modal is-active" onKeyPress={handleKeyPress}>
      <div className="modal-background" onClick={handleClick}></div>
      <div className="modal-card">
        <div className="modal-card-head">
          <p className="modal-card-title">Add new order</p>
          <button className="delete" aria-label="close" onClick={handleClick}></button>
        </div>
        <section className="modal-card-body">
          <form>
            <div className='field'>
              <label className='label'>Customer name:</label>
              <div className='control is-expanded'>
                <div className='select is-fullwidth'>
                  <select
                    onChange={(e) => setCustomerId(e.target.value)}
                    value={customerId}
                  >
                    {customers.map(customer =>
                      <option key={customer._id} value={customer._id}>{customer.name}</option>
                    )}
                  </select>
                </div>
              </div>
            </div>
            <div className='field'>
              <label className='label'>Customer orders (kg):</label>
              <div className='control'>
                <input
                  className='input'
                  onChange={(e) => setCustomerOrders(e.target.value)}
                  placeholder='Customer orders in kg'
                  required={true}
                  type='number'
                  value={customerOrders}
                />
              </div>
            </div>
          </form>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-info" onClick={handleSubmit} disabled={!customerOrders}>Save changes</button>
          <button className="button" onClick={handleClick}>Cancel</button>
        </footer>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addOrder: (order) => dispatch(addOrder(order))
});

export default connect(null, mapDispatchToProps)(AddNew);