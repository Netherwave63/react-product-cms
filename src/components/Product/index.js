import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deleteProduct } from '../../store/actionCreators/products'
import ProductModal from '../ProductModal'

const Product = ({ product, deleteProduct }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.packaging_material}</td>
      <td>{product.packaging_method}</td>
      <td>
        <button className='button is-white' onClick={() => deleteProduct(product._id)}><i className='fas fa-trash-alt' style={{ color: 'red' }}></i></button> &nbsp;
        <button className='button is-white' onClick={() => setIsActive(true)}><i className="fas fa-edit" style={{ color: 'dodgerblue' }}></i></button>
        {isActive ? <ProductModal product={product} setIsActive={setIsActive} /> : null}
      </td>
    </tr>
  )
}

const mapDispatchToProps = (dispatch) => ({
  deleteProduct: (id) => dispatch(deleteProduct(id))
})

export default connect(null, mapDispatchToProps)(Product)
