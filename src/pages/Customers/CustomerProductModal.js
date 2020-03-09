import React, { useState } from 'react'
import { connect } from 'react-redux'

const CustomerProductModal = ({
  defaultState = null,
  products,
  title,
  handleSubmit,
  setIsActive
}) => {
  const [productName, setProductName] = useState(defaultState ? defaultState.productName : products[0].name)
  const [weightPerPackage, setWeightPerPackage] = useState(defaultState ? defaultState.weightPerPackage : '')
  const [packagePerCarton, setPackagePerCarton] = useState(defaultState ? defaultState.packagePerCarton : '')

  const handleClick = () => {
    const product = {
      name: productName,
      weight_per_package: weightPerPackage,
      package_per_carton: packagePerCarton
    }
    if (defaultState) product._id = defaultState._id
    handleSubmit(product)
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={() => setIsActive(false)}></div>
      <div className="modal-card">
        <div className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" aria-label="close" onClick={() => setIsActive(false)}></button>
        </div>
        <section className="modal-card-body">
          <form>
            <div className='field'>
              <label className='label'>Product name:</label>
              <div className='control is-expanded'>
                <div className='select is-fullwidth'>
                  <select
                    onChange={(e) => setProductName(e.target.value)}
                    value={productName}
                  >
                    {products.map(product =>
                      <option key={product._id}>{product.name}</option>
                    )}
                  </select>
                </div>
              </div>
            </div>
            <div className='field'>
              <label className='label'>Weight per package (kg):</label>
              <div className='control'>
                <input
                  className='input'
                  onChange={(e) => setWeightPerPackage(e.target.value)}
                  placeholder='Weight per package in kg'
                  required={true}
                  type='number'
                  value={weightPerPackage}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Package per carton (unit):</label>
              <div className='control'>
                <input
                  className='input'
                  onChange={(e) => setPackagePerCarton(e.target.value)}
                  placeholder='Package per carton in unit/s'
                  required={true}
                  type='number'
                  value={packagePerCarton}
                />
              </div>
            </div>
          </form>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-info" onClick={handleClick}>Save changes</button>
          <button className="button" onClick={() => setIsActive(false)}>Cancel</button>
        </footer>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.productsState.products
})

export default connect(mapStateToProps)(CustomerProductModal)
