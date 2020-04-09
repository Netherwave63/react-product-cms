import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addOrder } from '../../../store/actionCreators/dashboard';
import { v4 } from 'uuid';
import { sortBy } from 'lodash';

const AddNew = ({
  // props
  customers,
  selectedProduct,
  setIsActive,
  // state
  products,
  productionBatches,
  orders,
  // dispatch
  addOrder
}) => {
  const [customerId, setCustomerId] = useState(customers[0]._id);
  const [customerOrders, setCustomerOrders] = useState('');
  const [ordersUnit, setOrdersUnit] = useState('Carton');

  // Remark
  let remark = '';
  if (productionBatches) {
    // get customer, customer's product and product references
    const targetCustomer = customers.find(customer => customer._id === customerId);
    const targetCustomerProduct = targetCustomer.products.find(product => product.product_id === selectedProduct);
    const targetProduct = products.find(product => product._id === selectedProduct);
    
    // output
    const previousOrders = orders.reduce((total, order) => { return total + parseInt(order.customerOrders) }, 0);
    const output_weight = productionBatches * targetProduct.weight_per_batch - previousOrders;
    
    if (output_weight > 0) {
      const output_estimate = Math.floor(output_weight / targetCustomerProduct.weight_per_package / targetCustomerProduct.package_per_carton);
      remark = 'Balance: ' + output_weight + ' kg, ' + 'Estimate output: ' + + output_estimate + ' ctn';
    } else {
      remark = 'Out of balance';
    }
  } else {
    remark = 'No batch run';
  }

  const handleClick = () => {
    setIsActive(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!customerOrders) return;
      handleSubmit();
    }
  };

  const handleSubmit = async (e) => {
    let data;
    if (ordersUnit === 'Carton') {
      let productInfo = customers.find(customer => customer._id === customerId).products.find(product => product.product_id === selectedProduct);
      data = {
        customerId,
        customerOrders: productInfo.package_per_carton * productInfo.weight_per_package * customerOrders
      }; 
    } else {
      data = {
        customerId,
        customerOrders
      };
    }
    await addOrder({
      uuid: v4(),
      ...data
    });
    setIsActive(false);
  };

  return (
    <div className="modal is-active" onKeyPress={handleKeyPress}>
      <div className="modal-background" onClick={handleClick}></div>
      <div className="modal-card">
        <div className="modal-card-head">
          <p className="modal-card-title">Add new order</p>
          <button className="delete" aria-label="close" onClick={handleClick}></button>
        </div>
        <section className="modal-card-body">
          <form>
            <div className='field'>
              <label className='label'>Customer name:</label>
              <div className='control is-expanded'>
                <div className='select is-fullwidth'>
                  <select
                    onChange={(e) => setCustomerId(e.target.value)}
                    value={customerId}
                  >
                    {sortBy(customers, 'name').map(customer =>
                      <option key={customer._id} value={customer._id}>{customer.name}</option>
                    )}
                  </select>
                </div>
              </div>
            </div>
            <div className='field'>
              <label className='label'>Orders unit:</label>
              <div className='control is-expanded'>
                <div className='select is-fullwidth'>
                  <select
                    onChange={(e) => setOrdersUnit(e.target.value)}
                    value={ordersUnit}
                  >
                    <option value='Carton'>Carton</option>
                    <option value='Kg'>Kg</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='field'>
              <label className='label'>Customer orders:</label>
              <div className='control'>
                <input
                  autoFocus={true}
                  className='input'
                  onChange={(e) => setCustomerOrders(e.target.value)}
                  placeholder='Customer orders'
                  required={true}
                  type='number'
                  value={customerOrders}
                />
              </div>
            </div>
            <p className='help'>{remark}</p>
          </form>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-info" onClick={handleSubmit} disabled={!customerOrders}>Save changes</button>
          <button className="button" onClick={handleClick}>Cancel</button>
        </footer>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  productionBatches: state.dashboardState.productionBatches,
  orders: state.dashboardState.orders,
  products: state.productsState.products
});

const mapDispatchToProps = (dispatch) => ({
  addOrder: (order) => dispatch(addOrder(order))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNew);