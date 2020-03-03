import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getProducts, addProduct, searchProducts, sortProducts } from '../../store/actionCreators/products'
import Product from '../../components/Product'
import ProductForm from '../../components/ProductForm'

const Products = ({ searchKey, isLoading, products, getProducts, addProduct, searchProducts, sortProducts }) => {
  const [text, setText] = useState('')
  products = products.filter(product => product.name.includes(searchKey))

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    searchProducts(text)
  }, [text])

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <div className='control has-icons-left'>
        <input 
          className='input'
          onChange={handleChange} 
          placeholder='Search product name'
          required
          type='text'  
          value={text}
        />
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>
      </div>
      {isLoading ? (
        <p>Fetching data...</p>
      ) : (
          <table className='table is-hoverable'>
            <tbody>
              <tr>
                <th onClick={() => sortProducts('sortByProductName')}>Product name</th>
                <th>Packaging material</th>
                <th>Packaging method</th>
                <th>Actions</th>
              </tr>
              {products.length ? (
                products.map(product =>
                  <Product key={product._id} product={product} />
                )) : (
                  <tr>
                    <td colSpan={4}>No product found</td>
                  </tr>
                )}
            </tbody>
          </table>
        )
      }
      <ProductForm handleSubmit={addProduct} />
    </>
  )
}

const mapStateToProps = (state) => ({
  products: state.productsState.products,
  isLoading: state.productsState.loading,
  searchKey: state.productsState.searchKey
})

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  addProduct: (product) => dispatch(addProduct(product)),
  searchProducts: (text) => dispatch(searchProducts(text)),
  sortProducts: (sortKey) => dispatch(sortProducts(sortKey))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
