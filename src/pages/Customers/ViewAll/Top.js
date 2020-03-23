import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCustomer } from '../../../store/actionCreators/customers';

const Top = ({
  // dispatch
  addCustomer
}) => {
  const [text, setText] = useState('');
  const [customerName, setCustomerName] = useState('');

  const handleAddNew = async (e) => {
    e.preventDefault();
    await addCustomer({
      name: customerName
    });
    setCustomerName('');
  }

  return (
    <div className='level'>
      <div className='level-left'>
        <div className='level-item'>
          <div className='field'>
            <div className='control has-icons-left'>
              <input
                className='input'
                onChange={(e) => setText(e.target.value)}
                placeholder='Search customer name'
                required
                style={{ width: '240px' }}
                type='text'
                value={text}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='level-right'>
        <div className='level-item'>
          <form onSubmit={handleAddNew}>
            <div className='field has-addons'>
              <div className='control'>
                <input
                  className='input'
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder='Add new customer'
                  type='text'
                  value={customerName}
                />
              </div>
              <div className='control'>
                <button className='button is-info' disabled={!customerName} type='submit'>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCustomer: (customer) => dispatch(addCustomer(customer))
});

export default connect(null, mapDispatchToProps)(Top);