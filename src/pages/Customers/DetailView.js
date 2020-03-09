import React, { useState } from 'react'
import { connect } from 'react-redux'
import DetailViewTable from './DetailViewTable'
import CustomerProductModal from './CustomerProductModal'
import { addNewProduct } from '../../store/actionCreators/customers'

const DetailView = ({ customers, addNewProduct }) => {
  return customers.length ? <DetailViewComponent customers={customers} addNewProduct={addNewProduct} /> : <p>No customer found</p>
}

const DetailViewComponent = ({ customers, addNewProduct }) => {
  const [selectedCustomerId, setSelectedCustomerId] = useState(customers[0]._id)
  const [isActive, setIsActive] = useState(false)

  const handleSubmit = async (product) => {
    await addNewProduct(selectedCustomerId, product)
    setIsActive(false)
  }

  return (
    <>
      <div className='level'>
        <div className='level-left'>
          <div className='level-item'>
            <div className='field has-addons'>
              <div className='control has-icons-left'>
                <div className='select'>
                  <select
                    onChange={(e) => setSelectedCustomerId(e.target.value)}
                    style={{ minWidth: '240px' }}
                    value={selectedCustomerId}
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
          </div>
        </div>

        <div className='level-right'>
          <div className='level-item'>
            <div className='control'>
              <button className='button is-info' onClick={() => setIsActive(true)}>Add new</button>
            </div>
          </div>
        </div>
      </div>
      <DetailViewTable customer={customers.find(customer => customer._id === selectedCustomerId)} />
      {isActive ? <CustomerProductModal setIsActive={setIsActive} handleSubmit={handleSubmit} /> : null}
    </>
  )
}

const mapStateToProps = (state) => ({
  customers: state.customersState.customers
})

const mapDispatchToProps = (dispatch) => ({
  addNewProduct: (id, product) => dispatch(addNewProduct(id, product))
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailView)
