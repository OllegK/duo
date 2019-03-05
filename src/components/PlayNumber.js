import React from 'react';
import { colors } from '../utils/utils';
import './PlayNumber.css';

const PlayNumber = props => (
  <button
    className="number"
    style={{ backgroundColor: colors[props.status] }}
    onClick={() => props.onClick(props.number, props.status)}>
    {props.number}
  </button>
);

export default PlayNumber;
