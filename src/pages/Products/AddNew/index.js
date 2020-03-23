import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../../store/actionCreators/products';

const AddNew = ({
  // dispatch
  addProduct
}) => {
  const [name, setName] = useState('');
  const [packaging_material, setPackagingMaterial] = useState('Plastic bag');
  const [packaging_method, setPackagingMethod] = useState('Auto');
  const [weight_per_batch, setWeightPerBatch] = useState('');

  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct({
      name,
      packaging_material,
      packaging_method,
      weight_per_batch
    });
    setName('');
    setPackagingMaterial('Plastic bag');
    setPackagingMethod('Auto');
    setWeightPerBatch('');
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='field is-horizontal'>
        <div className='field-label'>
          <label className='label'>Product name:</label>
        </div>
        <div className='field-body'>
          <div className='control'>
            <input
              className='input'
              onChange={(e) => setName(e.target.value)}
              placeholder='Please specify your product name'
              ref={inputRef}
              required={true}
              style={{ minWidth: '280px' }}
              value={name}
            />
          </div>
        </div>
      </div>

      <div className='field is-horizontal'>
        <div className='field-label'>
          <label className='label'>Packaging material:</label>
        </div>
        <div className='field-body'>
          <div className='control'>
            <div className='select'>
              <select
                onChange={(e) => setPackagingMaterial(e.target.value)}
                value={packaging_material}
              >
                <option>Plastic bag</option>
                <option>Film</option>
                <option>Tray</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className='field is-horizontal'>
        <div className='field-label'>
          <label className='label'>Packaging method:</label>
        </div>
        <div className='field-body'>
          <div className='control'>
            <div className='select'>
              <select
                onChange={(e) => setPackagingMethod(e.target.value)}
                value={packaging_method}
              >
                <option>Auto</option>
                <option>Manual</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className='field is-horizontal'>
        <div className='field-label'>
          <label className='label'>Weight per batch (kg):</label>
        </div>
        <div className='field-body'>
          <div className='control'>
            <input
              className='input'
              onChange={(e) => setWeightPerBatch(e.target.value)}
              placeholder='Weight per batch run in kg'
              required={true}
              style={{ minWidth: '280px' }}
              type='number'
              value={weight_per_batch}
            />
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label">
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button className='button is-info' type='submit'>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product))
});

export default connect(null, mapDispatchToProps)(AddNew);