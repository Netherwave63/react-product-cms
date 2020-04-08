import React, { useState } from 'react'
import { connect } from 'react-redux';
import Table from './Table';
import Top from './Top';
import Entry from '../../../components/Entry';
import { sortBy } from 'lodash';

const ViewAll = ({
  // props
  setCurrentIndex,
  // state
  loading,
  products,
  customers
}) => {
  const [search, setSearch] = useState('');

  const [sort, setSort] = useState({
    sortKey: 'NONE',
    isReverse: false
  });
  const SORTS = {
    NONE: list => list,
    NAME: list => sortBy(list, 'name')
  };
  const sortFunction = SORTS[sort.sortKey];
  const sortedList = sort.isReverse ? sortFunction(customers).reverse() : sortFunction(customers);

  const handleSort = sortKey => {
    const isReverse = sort.sortKey === sortKey && !sort.isReverse;
    setSort({ sortKey, isReverse });
  };

  return (
    <>
      {loading ? (
        <p>Fetching data...</p>
      ) : (
        products.length ? (
          <>
            <Top search={search} setSearch={setSearch} />
            <Entry array={sortedList.filter(customer => customer.name.toLowerCase().includes(search.toLowerCase()))} text='customer' />
            <Table customers={sortedList.filter(customer => customer.name.toLowerCase().includes(search.toLowerCase()))} setCurrentIndex={setCurrentIndex} sortKey={sort.sortKey} onSort={handleSort} />
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