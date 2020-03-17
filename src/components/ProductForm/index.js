import React, { useState } from 'react'

const ProductForm = (props) => {
  const { handleSubmit } = props
  const [productName, setProductName] = useState((props.product && props.product.name) || '')
  const [packagingMaterial, setPackagingMaterial] = useState((props.product && props.product.packaging_material) || 'Plastic bag')
  const [packagingMethod, setPackagingMethod] = useState((props.product && props.product.packaging_method) || 'Auto')
  const [weightPerBatch, setWeightPerBatch] = useState(props.product && props.product.weight_per_batch || '')

  const handleFormSubmission = (e) => {
    e.preventDefault()
    handleSubmit({
      name: productName,
      packaging_material: packagingMaterial,
      packaging_method: packagingMethod,
      weight_per_batch: parseInt(weightPerBatch)
    })
    setProductName('')
    setPackagingMaterial('Plastic bag')
    setPackagingMethod('Auto')
    setWeightPerBatch('')
  }

  return (
    <form onSubmit={handleFormSubmission}>
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
          <label className='label'>Packaging material:</label>
        </div>
        <div className='field-body'>
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
      </div>

      <div className='field is-horizontal'>
        <div className='field-label'>
          <label className='label'>Packaging method:</label>
        </div>
        <div className='field-body'>
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
      </div>

      <div className='field is-horizontal'>
        <div className='field-label'>
          <label className='label'>Weight per batch (kg):</label>
        </div>
        <div className='field-body'>
          <div className='control'>
            <input
              className='input'
              onChange={(e) => setWeightPerBatch(e.target.value)}
              placeholder='Weight per batch run in kg'
              required={true}
              style={{ minWidth: '280px' }}
              type='number'
              value={weightPerBatch}
            />
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label">
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button className='button is-info' type='submit'>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ProductForm
