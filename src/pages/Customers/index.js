import React, { useState } from 'react';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import ViewAll from './ViewAll';
import DetailView from './DetailView';
import { connect } from 'react-redux';

const Customers = ({
  // state
  customers
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Header heading='Customers' />
      <Tabs 
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        tabs={['View all', 'Detail View']}
      />
      {currentIndex === 0 ? 
        <ViewAll setCurrentIndex={setCurrentIndex} /> : (
        customers.length ?
        <DetailView /> :
        <p>No customer found</p>  
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  customers: state.customersState.customers
});

export default connect(mapStateToProps)(Customers);
