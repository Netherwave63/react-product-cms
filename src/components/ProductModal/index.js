import React, { useState } from 'react'
import { updateProduct } from '../../store/actionCreators/products'
import { connect } from 'react-redux'

const ProductModal = ({ product, setIsActive, updateProduct }) => {
  const [productName, setProductName] = useState(product.name)
  const [packagingMaterial, setPackagingMaterial] = useState(product.packaging_material)
  const [packagingMethod, setPackagingMethod] = useState(product.packaging_method)

  const handleClick = () => {
    setIsActive(false)
  }

  const handleSubmit = () => {
    updateProduct({
      _id: product._id,
      name: productName,
      packaging_material: packagingMaterial,
      packaging_method: packagingMethod
    })
    setIsActive(false)
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={handleClick}></div>
      <div className="modal-card">
        <div className="modal-card-head">
          <p className="modal-card-title">Edit product</p>
          <button className="delete" aria-label="close" onClick={handleClick}></button>
        </div>
        <section className="modal-card-body">
          <form>
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
          </form>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={handleSubmit}>Save changes</button>
          <button className="button" onClick={handleClick}>Cancel</button>
        </footer>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  updateProduct: (product) => dispatch(updateProduct(product))
})

export default connect(null, mapDispatchToProps)(ProductModal)
