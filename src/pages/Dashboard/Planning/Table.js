import React from 'react'
import Data from './Data';
import { connect } from 'react-redux';

const Table = ({
  // state
  orders
}) => {
  return (
    <div className="table-container">
      <table className='table is-hoverable is-fullwidth'>
        <tbody>
          <tr>
            <th>Customer name</th>
            <th>Orders</th>
            <th>Total package needed</th>
            <th>Total carton needed</th>
            <th>Estimate output (pkg)</th>
            <th>Estimate output (ctn)</th>
            <th>Balance</th>
            <th>Actions</th>
          </tr>
            {
              orders.length ? (
                orders.map((order, index) =>
                  <Data key={order.uuid} index={index} />
                )
              ) : (
                <tr>
                  <td colSpan="6">No data found</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              )
            }
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  orders: state.dashboardState.orders
});

export default connect(mapStateToProps)(Table);