import React, { useState } from 'react'
import ProductSelect from './ProductSelect';
import Batches from './Batches';
import Table from './Table';
import { connect } from 'react-redux';
import AddNew from './AddNew';

const Planning = ({
  // state
  selectedProduct,
  customers
}) => {
  const [isActive, setIsActive] = useState(false);

  const targetCustomers = customers.filter(customer =>
    customer.products.find(product => product.product_id === selectedProduct)
  );

  console.log(targetCustomers);

  const handleToggleAddNew = () => {
    setIsActive(true);
  };

  return (
    <>
      <div className='level'>
        <div className='level-left'>
          <div className='level-item'>
            <ProductSelect />
          </div>
        </div>

        <div className='level-right'>
          <div className='level-item'>
            <Batches />
          </div>
        </div>
      </div>

      <Table />

      <button 
        className='button is-info'
        disabled={!targetCustomers.length}
        onClick={handleToggleAddNew}
        title="Add any customer with this product registered"
      >
        Add New
      </button>

      {isActive ? <AddNew customers={targetCustomers} selectedProduct={selectedProduct} setIsActive={setIsActive} /> : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  selectedProduct: state.dashboardState.selectedProduct,
  customers: state.customersState.customers
});

export default connect(mapStateToProps)(Planning);