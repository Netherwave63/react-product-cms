import React from 'react'
import DetailViewTableData from './DetailViewTableData'
import { connect } from 'react-redux'
import { deleteEntryProduct, updateEntryProduct, sortProducts } from '../../store/actionCreators/customers'

const DetailViewTable = ({ customer, sortKey, deleteEntryProduct, updateEntryProduct, sortProducts }) => {
  const handleDeleteProduct = (productId) => {
    deleteEntryProduct(customer._id, productId)
  }

  if (sortKey !== null) {
    customer.products = sortKey ? customer.products.sort((a, b) => a.name < b.name ? -1 : 1) : customer.products.sort((a, b) => a.name > b.name ? -1 : 1) 
  }

  return (
    <>
      <table className='table is-hoverable is-fullwidth'>
        <tbody>
          <tr>
            <th>
              Product name &nbsp;
              <a onClick={() => sortProducts(!sortKey)} href="#">
                <i className={sortKey === null ? "fas fa-sort" : (sortKey === true ? 'fas fa-sort-up' : 'fas fa-sort-down')} style={sortKey === null ? undefined : (sortKey === true ? {display: 'inline-block', transform: 'translateY(4px)'} : {display: 'inline-block', transform: 'translateY(-4px)'})}></i>
              </a>
            </th>
            <th>Weight per package, kg/pkg</th>
            <th>Package per carton, pkg/ctn</th>
            <th>Actions</th>
          </tr>
          {
            customer.products.length ?
              customer.products.map(product =>
                <DetailViewTableData key={product._id} handleDeleteProduct={handleDeleteProduct} updateEntryProduct={(product) => updateEntryProduct(customer._id, product)} product={product} />
              ) : (
                <tr>
                  <td>No product found</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              )
          }
        </tbody>
      </table>
    </>
  )
}

const mapStateToProps = (state) => ({
  sortKey: state.customersState.sortKey_products
})

const mapDispatchToProps = (dispatch) => ({
  deleteEntryProduct: (customerId, productId) => dispatch(deleteEntryProduct(customerId, productId)),
  updateEntryProduct: (customerId, productId) => dispatch(updateEntryProduct(customerId, productId)),
  sortProducts: (sortKey) => dispatch(sortProducts(sortKey))
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailViewTable)
