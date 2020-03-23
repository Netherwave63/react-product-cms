import React, { useState } from 'react';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Planning from './Planning';

const Dashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Header heading='Dashboard' />
      <Tabs 
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        tabs={['Planning']}
      />
      {currentIndex === 0 ? <Planning /> : null}
    </>
  );
};

export default Dashboard;
