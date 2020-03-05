import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getProducts, searchProducts, sortProducts } from '../../store/actionCreators/products'
import Product from '../../components/Product'

const ViewAll = ({ sortKey, searchKey, isLoading, products, getProducts, searchProducts, sortProducts }) => {
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
      <div className='field'>
        <div className='control has-icons-left'>
          <input 
            className='input'
            onChange={handleChange} 
            placeholder='Search product name'
            required
            style={{ width: '240px' }}
            type='text'  
            value={text}
          />
          <span class="icon is-small is-left">
            <i class="fas fa-search"></i>
          </span>
        </div>
      </div>
      {isLoading ? (
        <p>Fetching data...</p>
      ) : (
          <table className='table is-hoverable is-fullwidth'>
            <tbody>
              <tr>
                <th>
                  Product name &nbsp;
                  <a onClick={() => sortProducts(!sortKey)}>
                    <i className={sortKey === null ? "fas fa-sort" : (sortKey === true ? 'fas fa-sort-up' : 'fas fa-sort-down')} style={sortKey === null ? undefined : (sortKey === true ? {display: 'inline-block', transform: 'translateY(4px)'} : {display: 'inline-block', transform: 'translateY(-4px)'})}></i>
                  </a>
                </th>
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
    </>
  )
}

const mapStateToProps = (state) => ({
  products: state.productsState.products,
  isLoading: state.productsState.loading,
  searchKey: state.productsState.searchKey,
  sortKey: state.productsState.sortKey
})

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  searchProducts: (text) => dispatch(searchProducts(text)),
  sortProducts: (sortKey) => dispatch(sortProducts(sortKey))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewAll)