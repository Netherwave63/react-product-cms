import React, { useState } from 'react';
import { connect } from 'react-redux';
import Table from './Table';
import Entry from '../../../components/Entry';
import Search from '../../../components/Search';
import { sortBy } from 'lodash';

const ViewAll = ({
  // state
  products,
  loading
}) => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState({
    sortKey: 'NONE',
    isReverse: false
  });
  const SORTS = {
    NONE: list => list,
    NAME: list => sortBy(list, 'name'),
    MATERIAL: list => sortBy(list, 'packaging_material'),
    METHOD: list => sortBy(list, 'packaging_method'),
    WEIGHT: list => sortBy(list, 'weight_per_batch').reverse()
  };
  const sortFunction = SORTS[sort.sortKey];
  const sortedList = sort.isReverse ? sortFunction(products).reverse() : sortFunction(products);

  const handleSort = sortKey => {
    const isReverse = sort.sortKey === sortKey && !sort.isReverse;
    setSort({ sortKey, isReverse });
  };

  return (
    <>
      {loading ? (
        <p>Fetching data...</p>
      ) : (
        <>
          <Search value={search} setValue={setSearch} placeholderText='Search product name' style={{ marginBottom: '24px' }} />
          <Entry array={sortedList.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))} text='product' />
          <Table products={sortedList.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))} sortKey={sort.sortKey} onSort={handleSort} />
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