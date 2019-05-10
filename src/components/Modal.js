import React from "react";
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ show, closeCallback, onChange, username }) => (
  <div className="modal" style={{ display: show ? 'block' : 'none'}}>
    <div className="overlay"></div>
    <div className="modal_content">
      <h2>Enter Your Name!</h2>
      <input style={{ textAlign: 'center', position: 'relative', display: 'block', margin: '0 auto' }}
        type='text' name='title' value={username} onChange={onChange} placeholder='<<Enter Your Name>>' />
      <button title="Close" className="close_modal" onClick={closeCallback}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  </div>
);

Modal.propTypes = {
  closeCallback: PropTypes.func,
  show: PropTypes.bool,
};

export default Modal;
