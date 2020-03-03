import React, { useState } from 'react'

const ProductForm = (props) => {
  const { handleSubmit } = props
  const [productName, setProductName] = useState(props.product && props.product.name || '')
  const [packagingMaterial, setPackagingMaterial] = useState(props.product && props.product.packaging_material || 'Plastic bag')
  const [packagingMethod, setPackagingMethod] = useState(props.product && props.product.packaging_method || 'Auto')

  const handleFormSubmission = (e) => {
    e.preventDefault()
    handleSubmit({
      name: productName,
      packaging_material: packagingMaterial,
      packaging_method: packagingMethod
    })
    setProductName('')
    setPackagingMaterial('Plastic bag')
    setPackagingMethod('Auto')
  }

  return (
    <form onSubmit={handleFormSubmission}>
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

export default ProductForm
