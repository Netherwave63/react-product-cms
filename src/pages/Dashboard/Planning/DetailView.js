import React, { useState } from 'react'

const DetailView = ({
  //props
  customer,
  product,
  batch,
  customerProduct,
  orders,
  output,
  remark,
  run,
  setIsActive
}) => {
  if (!run) run = 0;

  return (
    <div className='modal is-active'>
      <div className='modal-background' onClick={() => setIsActive(false)}></div>
      <div className='modal-content'>
        <div className='container content has-background-white' style={{ padding: '12px' }}>
          <p><strong>Product info</strong></p>
          <p><strong>Name: </strong>{product.name}</p>
          <p><strong>Packaging material: </strong>{product.packaging_material}</p>
          <p><strong>Packaging method: </strong>{product.packaging_method}</p>            
          <p><strong>Batch: </strong>{batch} kg per batch run</p>
          <hr />
          <p><strong>Production info</strong></p>   
          <p><strong>Batch run: </strong>{run > 1 ? `${run} batches` : `${run} batch`}</p>
          <p><strong>Estimate output: </strong>{`${run * batch}`} kg</p>                    
          <hr />
          <p><strong>Customer info</strong></p>
          <p><strong>Name: </strong>{customer.name}</p>
          <p><strong>Weight per package: </strong>{customerProduct.weight_per_package} kg/ pkg</p>            
          <p><strong>Package per carton: </strong>{customerProduct.package_per_carton} pkg/ ctn</p>            
          <hr />
          <p><strong>Orders info</strong></p>
          <p><strong>Orders: </strong>{orders} ctn</p>
          <p><strong>Estimate output: </strong>{output} ctn</p>   
          <p><strong>Remark: </strong>{remark}</p>     
          <p><strong></strong></p>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" onClick={() => setIsActive(false)}></button>
    </div>
  );
};

export default DetailView;