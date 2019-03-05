import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../utils/utils';
import './PlayNumber.css';

const PlayNumber = props => (
  <button
    type="button"
    className="number"
    style={{ backgroundColor: colors[props.status] }}
    onClick={() => props.onClick(props.number, props.status)}>
    {props.number}
  </button>
);

PlayNumber.propTypes = {
  status: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PlayNumber;
