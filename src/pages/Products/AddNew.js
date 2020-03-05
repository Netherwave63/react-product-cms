import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../../store/actionCreators/products'
import ProductForm from '../../components/ProductForm'
import Success from '../../components/Success'

const AddNew = ({ addProduct }) => {
  const [isActive, setIsActive] = useState(false)
  
  const handleSubmit = async (product) => {
    await addProduct(product)
    setIsActive(true)
    setTimeout(() => {
      setIsActive(false)
    }, 1500)
  }

  return (
    <>
      <ProductForm handleSubmit={handleSubmit} />
      {isActive ? <Success text='New product has successfully added to database!' setIsActive={setIsActive} /> : null}      
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product))
})

export default connect(null, mapDispatchToProps)(AddNew)