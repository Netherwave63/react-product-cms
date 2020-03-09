import React, { useState } from 'react'
import CustomerProductModal from './CustomerProductModal'
import { connect } from 'react-redux'

const DetailViewTableData = ({ product, products, handleDeleteProduct, updateEntryProduct }) => {
  const [isActive, setIsActive] = useState(false)

  const linkProduct = products.find(p => p.name === product.name)

  const defaultState = {
    _id: product._id,
    productName: product.name,
    weightPerPackage: product.weight_per_package,
    packagePerCarton: product.package_per_carton
  }

  const handleUpdateProduct = async (product) => {
    await updateEntryProduct(product)
    setIsActive(false)
  }

  const style = {
    padding: 0,
    border: 0,
    height: 'fit-content'
  }

  return (
    <tr>
      <td title={`${linkProduct.packaging_material} / ${linkProduct.packaging_method}`}>{product.name}</td>
      <td>{product.weight_per_package + ' kg/pkg'}</td>
      <td>{product.package_per_carton + ' pkg/ctn'}</td>
      <td>
        <button className='button is-white' style={style} onClick={() => handleDeleteProduct(product._id)} title='Delete product'><i className='fas fa-trash-alt' style={{ color: 'red' }}></i></button>
        &nbsp; &nbsp;
        <button className='button is-white' style={style} onClick={() => setIsActive(true)}><i className='fas fa-edit' style={{ color: 'dodgerblue' }} title='Edit product'></i></button>
        {isActive ? <CustomerProductModal defaultState={defaultState} title='Edit product' setIsActive={setIsActive} handleSubmit={handleUpdateProduct} /> : null}
      </td>
    </tr>
  )
}

const mapStateToProps = (state) => ({
  products: state.productsState.products
})

export default connect(mapStateToProps)(DetailViewTableData)
