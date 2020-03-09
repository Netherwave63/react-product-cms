import React from 'react'
import DetailViewTableData from './DetailViewTableData'
import { connect } from 'react-redux'
import { deleteEntryProduct } from '../../store/actionCreators/customers'

const DetailViewTable = ({ customer, deleteEntryProduct }) => {
  const handleDeleteProduct = (productId) => {
    deleteEntryProduct(customer._id, productId)
  }

  return (
    <>
      <table className='table is-hoverable is-fullwidth'>
        <tbody>
          <tr>
            <th>Product name</th>
            <th>Weight per package, kg/pkg</th>
            <th>Package per carton, pkg/ctn</th>
            <th>Actions</th>
          </tr>
          {
            customer.products.length ?
              customer.products.map(product =>
                <DetailViewTableData key={product._id} handleDeleteProduct={handleDeleteProduct} product={product} />
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

const mapDispatchToProps = (dispatch) => ({
  deleteEntryProduct: (customerId, productId) => dispatch(deleteEntryProduct(customerId, productId))
})

export default connect(null, mapDispatchToProps)(DetailViewTable)
