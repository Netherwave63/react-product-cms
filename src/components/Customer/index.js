import React from 'react'

const Customer = ({ customer }) => {
  const style = {
    padding: 0,
    border: 0,
    height: 'fit-content'
  }
  
  return (
    <tr>
      <td>{customer.name}</td>
      <td>{customer.products.length}</td>
      <td>
        <button className='button is-white' style={style} title='Delete customer'><i className='fas fa-trash-alt' style={{ color: 'red' }}></i></button> &nbsp;
        &nbsp;
        <button className='button is-white' style={style}><i className="fas fa-edit" style={{ color: 'dodgerblue' }} title='Edit customer name'></i></button>
        &nbsp; &nbsp;
        <button className='button is-white' style={style}><i class="fas fa-eye" style={{ color: 'mediumseagreen' }} title='Detail view'></i></button>
      </td>
    </tr>
  )
}

export default Customer