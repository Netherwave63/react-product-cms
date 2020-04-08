import React from 'react';
import { connect } from 'react-redux';
import Table from './Table';
import Entry from '../../../components/Entry';

const ViewAll = ({
  // state
  products,
  loading
}) => {
  return (
    <>
      {loading ? (
        <p>Fetching data...</p>
      ) : (
        <>
          <Entry array={products} text='product' />
          <Table products={products} />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.productsState.products,
  loading: state.productsState.loading
});

export default connect(mapStateToProps)(ViewAll);