import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions/actions.js';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=>{props.addFeature(props.feature)}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  // console.log('mapstatetoprops: ', state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
  }
}

// export default AdditionalFeature;

export default connect(mapStateToProps, {addFeature})(AdditionalFeature);