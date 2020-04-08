import React from 'react'
import { connect } from 'react-redux';
import Table from './Table';
import Top from './Top';
import Entry from '../../../components/Entry';

const ViewAll = ({
  // props
  setCurrentIndex,
  // state
  loading,
  products,
  customers
}) => {
  return (
    <>
      {loading ? (
        <p>Fetching data...</p>
      ) : (
        products.length ? (
          <>
            <Top />
            <Entry array={customers} text='customer' />
            <Table customers={customers} setCurrentIndex={setCurrentIndex} />
          </>
        ) : (
          <p>No product found</p>
        )
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.customersState.loading && state.productsState.loading,
  products: state.productsState.products,
  customers: state.customersState.customers
});

export default connect(mapStateToProps)(ViewAll);