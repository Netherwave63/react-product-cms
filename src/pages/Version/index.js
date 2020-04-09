import React, { useState } from 'react';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import ReleaseNote from './ReleaseNote';

const Version = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Header heading='Version' />
      <Tabs 
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        tabs={['Release Note']}
      />
      {currentIndex === 0 ? <ReleaseNote /> : null}
    </>
  );
};

export default Version;