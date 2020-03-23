import React, { useState } from 'react';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import ViewAll from './ViewAll';
import AddNew from './AddNew';

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Header heading={'Products'} />
      <Tabs 
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        tabs={['View all', 'Add new']}
      />
      {currentIndex === 0 ? <ViewAll /> : <AddNew />}
    </>
  );
};

export default Products;
