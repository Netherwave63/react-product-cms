import React from 'react'
import Data from './Data';

const Table = ({
  // props
  customers,
  setCurrentIndex,
  sortKey,
  onSort
}) => {
  return (
    <div className="table-container">
      <table className='table is-hoverable is-fullwidth'>
        <tbody>
          <tr>
            <th>Customer name&nbsp;&nbsp;<i className={sortKey === 'NAME' ? "fas fa-angle-down is-green" : "fas fa-angle-up is-grey"} onClick={() => onSort('NAME')}></i></th>
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
    </div>
  );
};

export default Table;