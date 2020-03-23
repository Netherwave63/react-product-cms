import React from 'react'
import Data from './Data';

const Table = ({
  // props
  customers,
  setCurrentIndex
}) => {
  return (
    <table className='table is-hoverable is-fullwidth'>
      <tbody>
        <tr>
          <th>Customer name</th>
          <th>All products</th>
          <th>Actions</th>
        </tr>
        {customers.length ?
          customers.map(customer =>
            <Data key={customer._id} customer={customer} setCurrentIndex={setCurrentIndex} />
          ) : (
            <tr>
              <td>No customer found</td>
              <td></td>
              <td></td>
            </tr>
          )}
      </tbody>
    </table>
  );
};

export default Table;