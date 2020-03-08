import React, { useState, useEffect } from 'react'
import SubHeader from '../../components/SubHeader'
import Tabs from '../../components/Tabs'
import ViewAll from './ViewAll'
import AddNew from './AddNew'
import { getProducts } from '../../store/actionCreators/products'
import { connect } from 'react-redux'

const Products = ({ getProducts }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    getProducts()
  }, [])

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

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts())
})

export default connect(null, mapDispatchToProps)(Products)
