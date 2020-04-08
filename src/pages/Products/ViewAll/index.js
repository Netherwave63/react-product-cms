import React, { useState } from 'react';
import { connect } from 'react-redux';
import Table from './Table';
import Entry from '../../../components/Entry';
import Search from '../../../components/Search';

const ViewAll = ({
  // state
  products,
  loading
}) => {
  const [search, setSearch] = useState('');

  return (
    <>
      {loading ? (
        <p>Fetching data...</p>
      ) : (
        <>
          <Search value={search} setValue={setSearch} placeholderText='Search product name' style={{ marginBottom: '24px' }} />
          <Entry array={products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))} text='product' />
          <Table products={products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))} />
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