import React, { useState } from 'react'

const Edit = ({ 
  // props
  product,
  onUpdateProduct,
  setIsActive
}) => {
  const [name, setName] = useState(product.name);
  const [packaging_material, setPackagingMaterial] = useState(product.packaging_material);
  const [packaging_method, setPackagingMethod] = useState(product.packaging_method);
  const [weight_per_batch, setWeightPerBatch] = useState(product.weight_per_batch);

  const handleClick = () => {
    setIsActive(false);
  };

  const handleSubmit = () => {
    onUpdateProduct({
      _id: product._id,
      name,
      packaging_material,
      packaging_method,
      weight_per_batch
    });
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
              <div className='control'>
                <input
                  className='input'
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Please specify your product name'
                  required={true}
                  value={name}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Packaging material:</label>
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
            <div className='field'>
              <label className='label'>Packaging method:</label>
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
            <div className='field'>
              <label className='label'>Weight per batch (kg):</label>
              <div className='control'>
                <input
                  className='input'
                  onChange={(e) => setWeightPerBatch(e.target.value)}
                  placeholder='Weight per batch run in kg'
                  required={true}
                  type='number'
                  value={weight_per_batch}
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
  );
};

export default Edit;