import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCustomer } from '../../../store/actionCreators/customers';
import Search from '../../../components/Search';

const Top = ({
  // props
  search, 
  setSearch,
  // dispatch
  addCustomer
}) => {
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
          <Search value={search} setValue={setSearch} placeholderText='Search customer name' />
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