import React, { useState } from 'react'

const Products = () => {
  const [productName, setProductName] = useState('')
  const [packagingMaterial, setPackagingMaterial] = useState('Plastic bag')
  const [packagingMethod, setPackagingMethod] = useState('Auto')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(productName, packagingMaterial, packagingMethod)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='field'>
        <label className='label'>Product name:</label>
        <div className='control'>
          <input 
            className='input' 
            onChange={(e) => setProductName(e.target.value)}
            placeholder='Please specify your product name'
            required={true}
            value={productName}
          />
        </div>
      </div>
      <div className='field'>
        <label className='label'>Packaging material:</label>
        <div className='control'>
          <div className='select'>
            <select
              onChange={(e) => setPackagingMaterial(e.target.value)}
              value={packagingMaterial}
            >
              <option>Plastic bag</option>
              <option>Film</option>
              <option>Tray</option>
            </select>
          </div>
        </div>
      </div>
      <div className='field'>
        <label className='label'>Packaging method:</label>
        <div className='control'>
          <div className='select'>
            <select
              onChange={(e) => setPackagingMethod(e.target.value)}
              value={packagingMethod}
            >
              <option>Auto</option>
              <option>Manual</option>
            </select>
          </div>
        </div>
      </div>
      <button className='button is-link' type='submit'>Confirm</button>
    </form>
  )
}

export default Products
