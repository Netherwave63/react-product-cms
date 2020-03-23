import React, { useState } from 'react'

const Edit = ({
  //props
  customer,
  onUpdateCustomer,
  setIsActive
}) => {
  const [customerName, setCustomerName] = useState(customer.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateCustomer({
      ...customer,
      name: customerName
    });
  };

  return (
    <div className='modal is-active'>
      <div className='modal-background' onClick={() => setIsActive(false)}></div>
      <div className='modal-card'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>Edit customer</p>
          <button className='delete' aria-label='close' onClick={() => setIsActive(false)}></button>
        </header>
        <section className='modal-card-body'>
          <div className='field'>
            <label className='label'>Customer name:</label>
            <div className='control'>
              <input
                className='input'
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder='Please specify customer name'
                required={true}
                value={customerName}
              />
            </div>
          </div>
        </section>
        <footer className='modal-card-foot'>
          <button className='button is-info' onClick={handleSubmit}>Save changes</button>
          <button className='button' onClick={() => setIsActive(false)}>Cancel</button>
        </footer>
      </div>
    </div>
  );
};

export default Edit;