import React from 'react'
import Data from './Data';

const Table = ({
  // props
  products,
  sortKey,
  onSort
}) => {
  return (
    <div className="table-container">
      <table className='table is-hoverable is-fullwidth'>
        <tbody>
          <tr>
            <th>Product name&nbsp;&nbsp;<i className={sortKey === 'NAME' ? "fas fa-angle-down is-green" : "fas fa-angle-up is-grey"} onClick={() => onSort('NAME')}></i></th>
            <th>Packaging material&nbsp;&nbsp;<i className={sortKey === 'MATERIAL' ? "fas fa-angle-down is-green" : "fas fa-angle-up is-grey"} onClick={() => onSort('MATERIAL')}></i></th>
            <th>Packaging method&nbsp;&nbsp;<i className={sortKey === 'METHOD' ? "fas fa-angle-down is-green" : "fas fa-angle-up is-grey"} onClick={() => onSort('METHOD')}></i></th>
            <th>Weight per batch (kg)&nbsp;&nbsp;<i className={sortKey === 'WEIGHT' ? "fas fa-angle-down is-green" : "fas fa-angle-up is-grey"} onClick={() => onSort('WEIGHT')}></i></th>
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