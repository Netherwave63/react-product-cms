import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteProduct, updateProduct } from '../../../store/actionCreators/products';
import Edit from './Edit';
import Alert from '../../../components/Alert';

const Data = ({ 
  // props
  product,
  // dispatch
  deleteProduct,
  updateProduct
}) => {
  const [isActive, setIsActive] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const style = {
    padding: 0,
    border: 0,
    height: 'fit-content'
  }

  const handleDeleteProduct = () => {
    if (product.index === 1) {
      deleteProduct(product._id);
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    };
  };

  const handleToggleEdit = () => {
    setIsActive(true);
  };

  const handleUpdateProduct = async (product) => {
    await updateProduct(product);
    setIsActive(false);
  }

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.packaging_material}</td>
      <td>{product.packaging_method}</td>
      <td>{`${product.weight_per_batch} kg`}</td>
      <td>
        <button 
          className='button is-white' 
          style={style}
          onClick={handleDeleteProduct} 
          title='Delete product'
        >
          <i className='fas fa-trash-alt' style={{ color: 'red' }}></i>
        </button>
        &nbsp; &nbsp;
        <button 
          className='button is-white'
          style={style}
          onClick={handleToggleEdit}
          title='Edit product'
        >
          <i className="fas fa-edit" style={{ color: 'dodgerblue' }}></i>
        </button>
        {isActive ? <Edit product={product} onUpdateProduct={handleUpdateProduct} setIsActive={setIsActive} /> : null}
        {showAlert ? <Alert text="The action can't be completed because the product is registered in another customer." setIsActive={setShowAlert} /> : null}
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteProduct: (_id) => dispatch(deleteProduct(_id)),
  updateProduct: (product) => dispatch(updateProduct(product))
});

export default connect(null, mapDispatchToProps)(Data);