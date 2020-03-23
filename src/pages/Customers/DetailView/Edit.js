import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateProduct } from '../../../store/actionCreators/customers';

const Edit = ({
  // props
  product,
  setIsActive,
  // state
  currentCustomer,
  products,
  // dispatch
  updateProduct
}) => {
  const [weight_per_package, setWeightPerPackage] = useState(product.weight_per_package);
  const [package_per_carton, setPackagePerCarton] = useState(product.package_per_carton);

  const handleClick = () => {
    setIsActive(false);
  };

  const targetProduct = products.find(p => p._id == product.product_id);

  const handleSubmit = async () => {
    await updateProduct(
      currentCustomer,
      {
        _id: product._id,
        product_name: targetProduct.name,
        product_id: product.product_id,
        weight_per_package,
        package_per_carton
      }
    );
    setIsActive(false);
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={handleClick}></div>
      <div className="modal-card">
        <div className="modal-card-head">
          <p className="modal-card-title">Edit product</p>
          <button className="delete" aria-label="close" onClick={handleClick}></button>
        </div>
        <section className="modal-card-body">
          <form>
            <div className='field'>
              <label className='label'>Product name:</label>
              <div className='control is-expanded'>
                <input 
                  className="input"
                  value={targetProduct.name}
                  readOnly
                />
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
          <button className="button is-info" onClick={handleSubmit}>Save changes</button>
          <button className="button" onClick={handleClick}>Cancel</button>
        </footer>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentCustomer: state.customersState.currentCustomer,
  products: state.productsState.products
});

const mapDispatchToProps = (dispatch) => ({
  updateProduct: (_id, product) => dispatch(updateProduct(_id, product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);