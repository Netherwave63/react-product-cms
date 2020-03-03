import React from 'react'

const Product = ({ product }) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.packaging_material}</td>
      <td>{product.packaging_method}</td>
      <td>Delete | Update</td>
    </tr>
  )
}

export default Product