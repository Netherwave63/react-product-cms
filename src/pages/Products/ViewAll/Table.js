import React from 'react'
import Data from './Data';

const Table = ({
  // props
  products
}) => {
  return (
    <div className="table-container">
      <table className='table is-hoverable is-fullwidth'>
        <tbody>
          <tr>
            <th>Product name</th>
            <th>Packaging material</th>
            <th>Packaging method</th>
            <th>Weight per batch (kg)</th>
            <th>Actions</th>
          </tr>
          {products.length ? (
            products.map(product =>
              <Data key={product._id} product={product} />
            )) : (
              <tr>
                <td colSpan={4}>No product found</td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;