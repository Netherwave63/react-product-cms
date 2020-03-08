import React, { useState } from 'react'

const AddNew = () => {
  const [customerName, setCustomerName] = useState('')

  const [productName, setProductName] = useState('')
  const [weightPerPackage, setWeightPerPackage] = useState(0)
  const [packagePerCarton, setPackagePerCarton] = useState(0)

  return (
    <form>
      <div className='field is-horizontal'>
        <div className='field-label'>
          <label className='label'>Customer name:</label>
        </div>
        <div className='field-body'>
          <div className='control'>
            <input
              className='input'
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder='Please specify new customer name'
              required={true}
              style={{ minWidth: '280px' }}
              value={customerName}
            />
          </div>
        </div>
      </div>

      <div className='field is-horizontal'>
        <div className='field-label'>
          <label className='label'>Product name:</label>
        </div>
        <div className='field-body'>
          <div className='control'>
            <input
              className='input'
              onChange={(e) => setProductName(e.target.value)}
              placeholder='Please specify your product name'
              required={true}
              style={{ minWidth: '280px' }}
              value={productName}
            />
          </div>
        </div>
      </div>

      <div className='field is-horizontal'>
        <div className='field-label'>
          <label className='label'>Weight per package:</label>
        </div>
        <div className='field-body'>
          <div className='control'>
            <input
              className='input'
              onChange={(e) => setWeightPerPackage(e.target.value)}
              placeholder='Weight per package in kg'
              required={true}
              style={{ minWidth: '280px' }}
              type='number'
              value={weightPerPackage}
            />
          </div>
        </div>
      </div>

      <div className='field is-horizontal'>
        <div className='field-label'>
          <label className='label'>Package per carton:</label>
        </div>
        <div className='field-body'>
          <div className='control'>
            <input
              className='input'
              onChange={(e) => setPackagePerCarton(e.target.value)}
              placeholder='Package per carton in unit'
              required={true}
              style={{ minWidth: '280px' }}
              type='number'
              value={packagePerCarton}
            />
          </div>
        </div>
      </div>

      <hr />

      <div className='field'>
        <label className='label'></label>
        <div className='control'>
          <button type='submit' className='button is-info'>Confirm</button>
        </div>
      </div>
    </form>
  )
}

export default AddNew