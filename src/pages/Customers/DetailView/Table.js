import React from 'react';
import Data from './Data';
import { connect } from 'react-redux';
import Entry from '../../../components/Entry';

const Table = ({ 
  // state
  customer
}) => {
  return (
    <>
      <Entry array={customer.products} text='product' />

      <div className="table-container">
        <table className='table is-hoverable is-fullwidth'>
          <tbody>
            <tr>
              <th>Product name</th>
              <th>Weight per package, kg/pkg</th>
              <th>Package per carton, pkg/ctn</th>
              <th>Actions</th>
            </tr>
            {
              customer.products.length ?
                customer.products.map(product =>
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