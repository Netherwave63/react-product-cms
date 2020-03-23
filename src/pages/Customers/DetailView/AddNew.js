import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../../store/actionCreators/customers';
import { updateProduct } from '../../../store/actionCreators/products';

const AddNew = ({
  // props
  setIsActive,
  // state
  currentCustomer,
  products,
  // dispatch
  addProduct,
  updateProduct
}) => {
  const [product_id, setProductId] = useState(products[0]._id);
  const [weight_per_package, setWeightPerPackage] = useState('');
  const [package_per_carton, setPackagePerCarton] = useState('');

  const handleClick = () => {
    setIsActive(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (!weight_per_package || !package_per_carton) return;
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const targetProduct = products.find(product => product._id === product_id);
    await addProduct(
      currentCustomer,
      {
        product_name: targetProduct.name,
        product_id,
        weight_per_package,
        package_per_carton
      }
    );
    await updateProduct({
      ...targetProduct,
      index: targetProduct.index + 1
    });
    setIsActive(false);
  };

  return (
    <div className="modal is-active" onKeyPress={handleKeyPress}>
      <div className="modal-background" onClick={handleClick}></div>
      <div className="modal-card">
        <div className="modal-card-head">
          <p className="modal-card-title">Add new product</p>
          <button className="delete" aria-label="close" onClick={handleClick}></button>
        </div>
        <section className="modal-card-body">
          <form>
            <div className='field'>
              <label className='label'>Product name:</label>
              <div className='control is-expanded'>
                <div className='select is-fullwidth'>
                  <select
                    onChange={(e) => setProductId(e.target.value)}
                    value={product_id}
                  >
                    {products.map(product =>
                      <option key={product._id} value={product._id}>{product.name}</option>
                    )}
                  </select>
                </div>
              </div>
            </div>
            <div className='field'>
              <label className='label'>Weight per package (kg):</label>
              <div className='control'>
                <input
                  className='input'
                  onChange={(e) => setWeightPerPackage(e.target.value)}
                  placeholder='Weight per package in kg'
                  required={true}
                  type='number'
                  value={weight_per_package}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Package per carton (unit):</label>
              <div className='control'>
                <input
                  className='input'
                  onChange={(e) => setPackagePerCarton(e.target.value)}
                  placeholder='Package per carton in unit/s'
                  required={true}
                  type='number'
                  value={package_per_carton}
                />
              </div>
            </div>
          </form>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-info" onClick={handleSubmit} disabled={!weight_per_package || !package_per_carton}>Save changes</button>
          <button className="button" onClick={handleClick}>Cancel</button>
        </footer>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.productsState.products,
  currentCustomer: state.customersState.currentCustomer
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: (_id, product) => dispatch(addProduct(_id, product)),
  updateProduct: (product) => dispatch(updateProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNew);