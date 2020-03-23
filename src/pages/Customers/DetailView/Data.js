import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from '../../../store/actionCreators/customers';
import { updateProduct } from '../../../store/actionCreators/products';
import Edit from './Edit';

const Data = ({ 
  // props
  product,
  // state
  currentCustomer,
  products,
  // dispatch
  deleteProduct,
  updateProduct
}) => {
  const [isActive, setIsActive] = useState(false)

  const style = {
    padding: 0,
    border: 0,
    height: 'fit-content'
  }

  const targetProduct = products.find(p => p._id == product.product_id);

  const handleDeleteProduct = async () => {
    await deleteProduct(currentCustomer, {
      _id: product._id
    });
    console.log(targetProduct.index);
    await updateProduct({
      ...targetProduct,
      index: targetProduct.index - 1
    });
  };

  const handleToggleEdit = () => {
    setIsActive(true);
  };

  return (
    <tr>
      <td title={`${targetProduct.packaging_material} / ${targetProduct.packaging_method}`}>
        {targetProduct.name}
      </td>
      <td>{product.weight_per_package + ' kg/pkg'}</td>
      <td>{product.package_per_carton + ' pkg/ctn'}</td>
      <td>
        <button 
          className='button is-white'
          onClick={handleDeleteProduct}
          style={style} 
          title='Delete product'
        >
          <i className='fas fa-trash-alt' style={{ color: 'red' }}></i>
        </button> &nbsp; &nbsp;
        <button 
          className='button is-white' 
          onClick={handleToggleEdit}
          style={style}
          title='Edit product'
        >
          <i className='fas fa-edit' style={{ color: 'dodgerblue' }}></i>
        </button>
      </td>
      {isActive ? <Edit product={product} setIsActive={setIsActive} /> : null}
    </tr>
  )
}

const mapStateToProps = (state) => ({
  currentCustomer: state.customersState.currentCustomer,
  products: state.productsState.products
});

const mapDispatchToProps = (dispatch) => ({
  deleteProduct: (_id, product) => dispatch(deleteProduct(_id, product)),
  updateProduct: (product) => dispatch(updateProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Data);