import React, { useState, useEffect } from 'react'
import SubHeader from '../../components/SubHeader'
import Tabs from '../../components/Tabs'
import ViewAll from './ViewAll'
import DetailView from './DetailView'

const Customers = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [customerId, setCustomerId] = useState(null)

  const handleDetailView = (customerId) => {
    setCustomerId(customerId)
    setCurrentIndex(1)
  }

  return (
    <>
      <SubHeader title="Customers" />
      <Tabs
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        tabs={['View All', 'Detail View']}
      />
      {currentIndex === 0 ? <ViewAll handleDetailView={handleDetailView} /> : <DetailView customerId={customerId} />}
    </>
  )
}

export default Customers
