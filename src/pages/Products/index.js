import React, { useState } from 'react'
import SubHeader from '../../components/SubHeader'
import Tabs from '../../components/Tabs'
import ViewAll from './ViewAll'
import AddNew from './AddNew'

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <>
      <SubHeader title='Products' />
      <Tabs 
        currentIndex={currentIndex} 
        setCurrentIndex={setCurrentIndex} 
        tabs={['View All', 'Add New Product']}
      />
      {currentIndex === 0 ? <ViewAll /> : <AddNew />}
    </>
  )
}

export default Products
