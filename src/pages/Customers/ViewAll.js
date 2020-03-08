import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addCustomer } from '../../store/actionCreators/customers'
import Customer from '../../components/Customer'

const ViewAll = ({ 
  customers,
  addCustomer 
}) => {
  const [customerName, setCustomerName] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addCustomer({
      name: customerName
    })
    setText('')
  }

  return (
    <>
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
            <form onSubmit={handleSubmit}>
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

      <table className='table is-hoverable is-fullwidth'>
        <tr>
          <th>Customer name</th>
          <th>All products</th>
          <th>Actions</th>
        </tr>
        {customers.length?
          customers.map(customer => 
            <Customer key={customer._id} customer={customer} />
          ) : <tr><td>No customer found</td></tr>
        }
      </table>
    </>
  )
}

const mapStateToProps = (state) => ({
  customers: state.customersState.customers
})

const mapDispatchToProps = (dispatch) => ({
  addCustomer: (customer) => dispatch(addCustomer(customer))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewAll)