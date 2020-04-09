import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteOrder, shiftOrder, unshiftOrder } from '../../../store/actionCreators/dashboard';
import DetailView from './DetailView';

const Data = ({ 
  // props
  index,
  // state
  orders,
  customers,
  products,
  selectedProduct,
  productionBatches,
  // dispatch
  deleteOrder,
  shiftOrder,
  unshiftOrder
}) => {
  const [isActive, setIsActive] = useState(false);

  const style = {
    padding: 0,
    border: 0,
    height: 'fit-content'
  };

  // order (from index)
  const order = orders[index];

  // get customer, customer's product and product references
  const targetCustomer = customers.find(customer => customer._id === order.customerId);
  const targetCustomerProduct = targetCustomer.products.find(product => product.product_id === selectedProduct);
  const targetProduct = products.find(product => product._id === selectedProduct);

  // utils
  const weight_per_batch = targetProduct.weight_per_batch;
  const weight_per_package = targetCustomerProduct.weight_per_package;
  const package_per_carton = targetCustomerProduct.package_per_carton;
  
  // customer
  const customer_orders = order.customerOrders;
  const customer_total_package = Math.floor(customer_orders / weight_per_package);
  const customer_loose_weight = customer_orders % weight_per_package;
  const customer_total_carton = Math.floor(customer_total_package / package_per_carton);
  const customer_loose_package = customer_total_package % package_per_carton;

  // output
  const previousOrders = orders
    .filter((_, i) => i < index)
    .reduce((total, order) => { return total + parseInt(order.customerOrders) }, 0);
  const output_weight = productionBatches * weight_per_batch - previousOrders;
  const balance_weight = output_weight - customer_orders;
  let output_total_package, output_total_carton, output_loose_package, output_loose_weight;
  if (balance_weight >= 0) {
    output_total_package = customer_total_package;
    output_total_carton = customer_total_carton;
    output_loose_package = customer_loose_package;
    output_loose_weight = 0;
  } else {
    output_total_package = Math.floor(output_weight / weight_per_package);
    output_total_carton = Math.floor(output_total_package / package_per_carton);
    output_loose_package = output_total_package % package_per_carton;
    output_loose_weight = output_weight % weight_per_package;
  }
  if (output_total_package < 0) output_total_package = 0;
  if (output_total_carton < 0) output_total_carton = 0;
  if (output_loose_package < 0) output_loose_package = 0;
  if (output_loose_weight < 0) output_loose_weight = 0;

  // color
  const color = balance_weight < 0 ? 'tomato' : (balance_weight > 0 ? 'mediumseagreen' : 'grey'); 
  const remark = balance_weight >= 0 ? 'All good' : `Still need ${Math.ceil(Math.abs(balance_weight) / weight_per_batch)} batches run`;

  // format number
  Number.prototype.format = function () {
    return this >= 0 ? this.toString().split(/(?=(?:\d{3})+(?:\.|$))/g ).join( "," ) : '-' + (this*-1).toString().split(/(?=(?:\d{3})+(?:\.|$))/g ).join( "," );
  };

  return (
    <tr>
      <td>{targetCustomer.name}</td>
      <td>{parseInt(customer_orders).format() + ' kg'}</td>
      <td title={'Weight per package: ' + weight_per_package + ' kg/pkg'}>
        {customer_total_package + ' pkg' + (customer_loose_weight ? ' | ' + customer_loose_weight + ' kg' : '')}
      </td>
      <td title={'Package per carton: ' + package_per_carton + ' pkg/ctn'}>
        {customer_total_carton + ' ctn' + (customer_loose_package ? ' | ' + customer_loose_package + ' pkg' : '')}
      </td>
      <td>
        {output_total_package + ' pkg' + (output_loose_weight ? ' | ' + output_loose_weight + ' kg' : '')}
      </td>
      <td>
        {output_total_carton + ' ctn' + (output_loose_package ? ' | ' + output_loose_package + ' pkg': '')}
      </td>
      <td style={{ color }} title={remark}>
        {balance_weight > 0 ? '+' + parseInt(balance_weight).format() + ' kg' : parseInt(balance_weight).format() + ' kg' }
      </td>
      <td>
        <button 
          className='button is-white'
          onClick={() => deleteOrder(order)}
          style={style} 
          title='Delete order'
        >
          <i className='fas fa-trash-alt' style={{ color: 'red' }}></i>
        </button> &nbsp; &nbsp;
        <button 
          className='button is-white'
          onClick={() => {setIsActive(true)}}
          style={style} 
          title='Detail view'
        >
          <i className='fas fa-eye' style={{ color: 'mediumseagreen' }}></i>
        </button> &nbsp; &nbsp;
        { index !== 0 &&
          <>
            <button 
              className='button is-white'
              onClick={() => shiftOrder(index)}
              style={style}
              title='Shift order up'
            >
              <i className='fas fa-arrow-up' style={{ color: 'dodgerblue' }}></i>
            </button> &nbsp; &nbsp;
          </>
        }
        { orders.length > 1 && index !== orders.length - 1 &&
          <button 
            className='button is-white'
            onClick={() => unshiftOrder(index)}
            style={style}
            title='Shift order down'
          >
            <i className='fas fa-arrow-down' style={{ color: 'mediumseagreen' }}></i>
          </button>
        }
        {isActive ? <DetailView customer={targetCustomer} product={targetProduct} customerProduct={targetCustomerProduct} batch={weight_per_batch} orders={customer_total_carton} output={output_total_carton} remark={remark} run={productionBatches} setIsActive={setIsActive} /> : null} 
      </td>
    </tr>
  );
};

const mapStateToProps = (state) => ({
  selectedProduct: state.dashboardState.selectedProduct,
  customers: state.customersState.customers,
  productionBatches: state.dashboardState.productionBatches,
  products: state.productsState.products,
  orders: state.dashboardState.orders
});

const mapDispatchToProps = (dispatch) => ({
  deleteOrder: (order) => dispatch(deleteOrder(order)),
  shiftOrder: (index) => dispatch(shiftOrder(index)),
  unshiftOrder: (index) => dispatch(unshiftOrder(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Data);