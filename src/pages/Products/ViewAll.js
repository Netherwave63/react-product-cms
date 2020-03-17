import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { searchProducts, sortProducts } from '../../store/actionCreators/products'
import Product from '../../components/Product'

const ViewAll = ({ sortKey, searchKey, isLoading, products, searchProducts, sortProducts }) => {
  const [text, setText] = useState('')
  products = products.filter(product => product.name.toLowerCase().includes(searchKey.toLowerCase()))

  useEffect(() => {
    searchProducts(text)
  }, [searchProducts, text])

  return (
    <>
      <div className='field'>
        <div className='control has-icons-left'>
          <input 
            className='input'
            onChange={(e) => setText(e.target.value)} 
            placeholder='Search product name'
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
      {isLoading ? (
        <p>Fetching data...</p>
      ) : (
          <table className='table is-hoverable is-fullwidth'>
            <tbody>
              <tr>
                <th>
                  Product name &nbsp;
                  <a onClick={() => sortProducts(!sortKey)} href="#">
                    <i className={sortKey === null ? "fas fa-sort" : (sortKey === true ? 'fas fa-sort-up' : 'fas fa-sort-down')} style={sortKey === null ? undefined : (sortKey === true ? {display: 'inline-block', transform: 'translateY(4px)'} : {display: 'inline-block', transform: 'translateY(-4px)'})}></i>
                  </a>
                </th>
                <th>Packaging material</th>
                <th>Packaging method</th>
                <th>Weight per batch (kg)</th>
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
  searchProducts: (text) => dispatch(searchProducts(text)),
  sortProducts: (sortKey) => dispatch(sortProducts(sortKey))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewAll)