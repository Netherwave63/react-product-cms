import React from 'react'
import { connect } from 'react-redux';
import { updateCurrentCustomer } from '../../../store/actionCreators/customers';

const CustomerSelect = ({
  // state
  currentCustomer,
  customers,
  // dispatch
  updateCurrentCustomer
}) => {
  return (
    <div className='field has-addons'>
      <div className='control has-icons-left'>
        <div className='select'>
          <select
            onChange={(e) => updateCurrentCustomer(e.target.value)}
            style={{ minWidth: '240px' }}
            value={currentCustomer}
          >
            {customers.map(customer =>
              <option key={customer._id} value={customer._id}>{customer.name}</option>
            )}
          </select>
        </div>
        <div class="icon is-small is-left">
          <i class="fas fa-users"></i>
        </div>
      </div>
      <div className='control'>
        <button type='submit' className='button is-info'>Choose</button>
      </div>
    </div> 
  );
};

const mapStateToProps = (state) => ({
  currentCustomer: state.customersState.currentCustomer,
  customers: state.customersState.customers
});

const mapDispatchToProps = (dispatch) => ({
  updateCurrentCustomer: (_id) => dispatch(updateCurrentCustomer(_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSelect);