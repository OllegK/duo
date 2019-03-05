import React from 'react';
import PropTypes from 'prop-types';
import { utils } from './utils';
import './StarsDisplay.css';

const StarsDisplay = props => (
  <>
    {utils.range(1, props.count).map(
      starId => <div key={starId} className="star" />
    )}
  </>
);

StarsDisplay.propTypes = {
  count: PropTypes.number.isRequired,
};

export default StarsDisplay;
