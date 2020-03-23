import React, { useState } from 'react';
import Edit from './Edit';
import { connect } from 'react-redux';
import { updateCurrentCustomer, deleteCustomer, updateCustomer } from '../../../store/actionCreators/customers';
import Alert from '../../../components/Alert';

const Data = ({
  // props
  customer,
  setCurrentIndex,
  // dispatch
  deleteCustomer,
  updateCustomer,
  updateCurrentCustomer
}) => {
  const [isActive, setIsActive] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const style = {
    padding: 0,
    border: 0,
    height: 'fit-content'
  };

  const handleDeleteCustomer = () => {
    if (customer.products.length) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    } else {
      deleteCustomer(customer._id);
    };
  };

  const handleToggleEdit = () => {
    setIsActive(true);
  };
  
  const handleUpdateCustomer = async (customer) => {
    await updateCustomer(customer);
    setIsActive(false);
  };

  const handleUpdateCurrentCustomer = () => {
    updateCurrentCustomer(customer._id);
    setCurrentIndex(1);
  };

  return (
    <tr>
      <td>{customer.name}</td>
      <td>{customer.products.length ? (customer.products.length > 1 ? `${customer.products.length} products` : `${customer.products.length} product`) : 'No product found'}</td>
      <td>
        <button 
          className='button is-white'
          onClick={handleDeleteCustomer} 
          style={style} 
          title='Delete customer'
        >
          <i className='fas fa-trash-alt' style={{ color: 'red' }}></i>
        </button> &nbsp; &nbsp;
        <button 
          className='button is-white'
          onClick={handleToggleEdit} 
          style={style}
          title='Edit customer'
        >
          <i className='fas fa-edit' style={{ color: 'dodgerblue' }}></i>
        </button>&nbsp; &nbsp;
        <button 
          className='button is-white'
          onClick={handleUpdateCurrentCustomer}
          style={style}
          title='Detail view'
        >
          <i class='fas fa-eye' style={{ color: 'mediumseagreen' }}></i>
        </button>
      </td>
      {isActive ? <Edit customer={customer} onUpdateCustomer={handleUpdateCustomer} setIsActive={setIsActive} /> : null}
      {showAlert ? <Alert text="The action can't be completed because another product is registered with this customer." setIsActive={setShowAlert} /> : null}
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteCustomer: (_id) => dispatch(deleteCustomer(_id)),
  updateCustomer: (customer) => dispatch(updateCustomer(customer)),
  updateCurrentCustomer: (_id) => dispatch(updateCurrentCustomer(_id))
});

export default connect(null, mapDispatchToProps)(Data);