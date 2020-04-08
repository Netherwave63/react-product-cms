import React from 'react'
import { connect } from 'react-redux';
import { updateSelectedProduct } from '../../../store/actionCreators/dashboard';
import { sortBy } from 'lodash';

const ProductSelect = ({
  // state
  selectedProduct,
  products,
  // dispatch
  updateSelectedProduct
}) => {
  return (
    <div className='field has-addons'>
      <div className='control has-icons-left'>
        <div className='select'>
          <select
            onChange={(e) => updateSelectedProduct(e.target.value)}
            style={{ minWidth: '240px' }}
            value={selectedProduct}
          >
            {sortBy(products, 'name').map(product =>
              <option key={product._id} value={product._id}>{product.name}</option>
            )}
          </select>
        </div>
        <div class="icon is-small is-left">
          <i class="fas fa-cubes"></i>
        </div>
      </div>
      <div className='control'>
        <button type='submit' className='button is-info'>Choose</button>
      </div>
    </div> 
  );
};

const mapStateToProps = (state) => ({
  products: state.productsState.products,
  selectedProduct: state.dashboardState.selectedProduct
});

const mapDispatchToProps = (dispatch) => ({
  updateSelectedProduct: (_id) => dispatch(updateSelectedProduct(_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductSelect);