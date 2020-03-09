import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deleteCustomer, updateCustomer } from '../../store/actionCreators/customers'

const Customer = ({
  customer,
  deleteCustomer,
  updateCustomer
}) => {
  const [isActive, setIsActive] = useState(false)

  const style = {
    padding: 0,
    border: 0,
    height: 'fit-content'
  }

  const handleSubmit = async (customerName) => {
    await updateCustomer({
      _id: customer._id,
      name: customerName
    })
    setIsActive(false)
  }

  return (
    <tr>
      <td>{customer.name}</td>
      <td>{customer.products.length ? (customer.products.length > 1 ? `${customer.products.length} products` : `${customer.products.length} product`) : 'No product found'}</td>
      <td>
        <button className='button is-white' onClick={() => deleteCustomer(customer._id)} style={style} title='Delete customer'><i className='fas fa-trash-alt' style={{ color: 'red' }}></i></button> &nbsp;
        &nbsp;
        <button className='button is-white' onClick={() => setIsActive(true)} style={style}><i className='fas fa-edit' style={{ color: 'dodgerblue' }} title='Edit customer'></i></button>
        &nbsp; &nbsp;
        <button className='button is-white' style={style}><i class='fas fa-eye' style={{ color: 'mediumseagreen' }} title='Detail view'></i></button>
        {isActive ? <ProductModal defaultName={customer.name} handleSubmit={handleSubmit} setIsActive={setIsActive} /> : null}
      </td>
    </tr>
  )
}

const ProductModal = ({ defaultName, handleSubmit, setIsActive }) => {
  const [customerName, setCustomerName] = useState(defaultName)

  return (
    <div className='modal is-active'>
      <div className='modal-background' onClick={() => setIsActive(false)}></div>
      <div className='modal-card'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>Edit customer</p>
          <button className='delete' aria-label='close' onClick={() => setIsActive(false)}></button>
        </header>
        <section className='modal-card-body'>
          <div className='field'>
            <label className='label'>Customer name:</label>
            <div className='control'>
              <input
                className='input'
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder='Please specify customer name'
                required={true}
                value={customerName}
              />
            </div>
          </div>
        </section>
        <footer className='modal-card-foot'>
          <button className='button is-info' onClick={() => handleSubmit(customerName)}>Save changes</button>
          <button className='button' onClick={() => setIsActive(false)}>Cancel</button>
        </footer>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  deleteCustomer: (id) => dispatch(deleteCustomer(id)),
  updateCustomer: (customer) => dispatch(updateCustomer(customer))
})

export default connect(null, mapDispatchToProps)(Customer)
