import React, { useState, useEffect } from 'react'
import SubHeader from '../../components/SubHeader'
import Tabs from '../../components/Tabs'
import ViewAll from './ViewAll'
import AddNew from './AddNew'
import { connect } from 'react-redux'
import { getCustomers } from '../../store/actionCreators/customers'

const Customers = ({ getCustomers }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    getCustomers()
  }, [])

  return (
    <>
      <SubHeader title="Customers" />
      <Tabs 
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        tabs={['View All', 'Add New']}
      />
      {currentIndex === 0 ? <ViewAll /> : <AddNew />}
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  getCustomers: () => dispatch(getCustomers())
})

export default connect(null, mapDispatchToProps)(Customers)
