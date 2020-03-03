import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getProducts, addProduct } from '../../store/actionCreators/products'
import Product from '../../components/Product'

const Products = ({ products, getProducts, addProduct }) => {
  const [productName, setProductName] = useState('')
  const [packagingMaterial, setPackagingMaterial] = useState('Plastic bag')
  const [packagingMethod, setPackagingMethod] = useState('Auto')

  const handleSubmit = (e) => {
    e.preventDefault()
    addProduct({
      name: productName,
      packaging_material: packagingMaterial,
      packaging_method: packagingMethod
    })
    setProductName('')
    setPackagingMaterial('Plastic bag')
    setPackagingMethod('Auto')
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <table className='table is-hoverable'>
        <tbody>
          <tr>
            <th>Product name</th>
            <th>Packaging material</th>
            <th>Packaging method</th>
            <th>Actions</th>
          </tr>
          {products ? (
            products.map(product => 
              <Product key={product._id} product={product} />
            )) : (
            <tr>
              <td colSpan={4}>The list is empty.</td>
            </tr>
          )}
        </tbody>
      </table>
      
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
    </>
  )
}

const mapStateToProps = (state) => ({
  products: state.productsState.products
})

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  addProduct: (product) => dispatch(addProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
