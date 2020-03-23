import React, { useState } from 'react';
import CustomerSelect from './CustomerSelect';
import Table from './Table';
import AddNew from './AddNew';

const DetailView = () => {
  const [isActive, setIsActive] = useState(false);
  
  const handleToggleAddNew = () => {
    setIsActive(true);
  };

  return (
    <>
      <div className='level'>
        <div className='level-left'>
          <div className='level-item'>
            <CustomerSelect />
          </div>
        </div>

        <div className='level-right'>
          <div className='level-item'>
            <button className='button is-info' onClick={handleToggleAddNew}>Add New</button>
          </div>
        </div>
      </div>

      <Table />
      
      {isActive ? <AddNew setIsActive={setIsActive} /> : null}
    </>
  );
};

export default DetailView;