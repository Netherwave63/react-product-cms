import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProducts, addProduct } from '../../store/actionCreators/products'
import Product from '../../components/Product'
import ProductForm from '../../components/ProductForm'

const Products = ({ isLoading, products, getProducts, addProduct }) => {
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      {isLoading ? (
        <p>Fetching data...</p>
      ) : (
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
        )
      }
      <ProductForm handleSubmit={addProduct} />
    </>
  )
}

const mapStateToProps = (state) => ({
  products: state.productsState.products,
  isLoading: state.productsState.loading
})

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  addProduct: (product) => dispatch(addProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
