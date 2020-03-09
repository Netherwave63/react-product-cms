import React from 'react'

const DetailViewTableData = ({ product, handleDeleteProduct }) => {
  const style = {
    padding: 0,
    border: 0,
    height: 'fit-content'
  }

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.weight_per_package}</td>
      <td>{product.package_per_carton}</td>
      <td>
        <button className='button is-white' style={style} onClick={() => handleDeleteProduct(product._id)} title='Delete product'><i className='fas fa-trash-alt' style={{ color: 'red' }}></i></button>
        &nbsp; &nbsp;
        <button className='button is-white' style={style}><i className='fas fa-edit' style={{ color: 'dodgerblue' }} title='Edit product'></i></button>
      </td>
    </tr>
  )
}

export default DetailViewTableData
