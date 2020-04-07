import React from 'react'
import { connect } from 'react-redux';
import { updateProductionBatches } from '../../../store/actionCreators/dashboard';

const Batches = ({
  // state
  productionBatches,
  // dispatch
  updateProductionBatches
}) => {
  return (
    <div className="field has-addons">
      <p className="control">
        <input 
          className="input"
          onChange={(e) => updateProductionBatches(e.target.value)} 
          placeholder="Batches run in unit"
          type="number"
          value={productionBatches ? productionBatches : ''}
        />
      </p>
      <p class="control">
        <a class="button is-static">
          Batches
        </a>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  productionBatches: state.dashboardState.productionBatches
});

const mapDispatchToProps = (dispatch) => ({
  updateProductionBatches: (batches) => dispatch(updateProductionBatches(batches))
});

export default connect(mapStateToProps, mapDispatchToProps)(Batches);