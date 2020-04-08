import React, { useState } from 'react';
import Data from './Data';
import { connect } from 'react-redux';
import Entry from '../../../components/Entry';
import { sortBy } from 'lodash';

const Table = ({ 
  // state
  customer
}) => {
  const [sort, setSort] = useState({
    sortKey: 'NONE',
    isReverse: false
  });
  const SORTS = {
    NONE: list => list,
    NAME: list => sortBy(list, 'product_name'),
    PACKAGE: list => sortBy(list, 'weight_per_package').reverse(),
    CARTON: list => sortBy(list, 'package_per_carton').reverse()
  };
  const sortFunction = SORTS[sort.sortKey];
  const sortedList = sort.isReverse ? sortFunction(customer.products).reverse() : sortFunction(customer.products);

  const handleSort = sortKey => {
    const isReverse = sort.sortKey === sortKey && !sort.isReverse;
    setSort({ sortKey, isReverse });
  };

  return (
    <>
      <Entry array={customer.products} text='product' />

      <div className="table-container">
        <table className='table is-hoverable is-fullwidth'>
          <tbody>
            <tr>
              <th>Product name&nbsp;&nbsp;<i className={sort.sortKey === 'NAME' ? "fas fa-angle-down is-green" : "fas fa-angle-up is-grey"} onClick={() => handleSort('NAME')}></i></th>
              <th>Weight per package, kg/pkg&nbsp;&nbsp;<i className={sort.sortKey === 'PACKAGE' ? "fas fa-angle-down is-green" : "fas fa-angle-up is-grey"} onClick={() => handleSort('PACKAGE')}></i></th>
              <th>Package per carton, pkg/ctn&nbsp;&nbsp;<i className={sort.sortKey === 'CARTON' ? "fas fa-angle-down is-green" : "fas fa-angle-up is-grey"} onClick={() => handleSort('CARTON')}></i></th>
              <th>Actions</th>
            </tr>
            {
              customer.products.length ?
                sortedList.map(product =>
                  <Data key={product._id} product={product} />
                ) : (
                  <tr>
                    <td colSpan="4">No product found</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                )
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  customer: state.customersState.customers.find(customer => customer._id === state.customersState.currentCustomer)
});

export default connect(mapStateToProps)(Table);