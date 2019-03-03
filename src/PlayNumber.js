import React from 'react';
import { colors } from './utils';
import './PlayNumber.css';

const PlayNumber = props => {
  console.log(props);
  return <button
    className="number"
    style = {{ backgroundColor: colors[props.status]}}
    onClick={() => console.log('Num', props.number)}>
    {props.number}
  </button>
}

export default PlayNumber;
