import React, { createRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ show, closeCallback, onChange, username }) => {
  const nameInput = createRef();

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      closeCallback();
    }
  };

  return (
    <div className="modal" style={{ display: show ? 'block' : 'none' }} onKeyDown={handleKeyDown}>
      <div className="overlay" />
      <div className="modal_content">
        <h2>Enter Your Name:</h2>
        <input
          required
          style={{ textAlign: 'center', position: 'relative', display: 'block', margin: '0 auto' }}
          type="text"
          ref={nameInput}
          name="title"
          defaultValue={username}
          onChange={onChange}
          placeholder="<<Enter Your Name>>"
        />
        <button
          type="button"
          disabled={!username}
          title="Close"
          className="close_modal"
          onClick={closeCallback}
        >
          <i className="fas fa-times" />
        </button>
        <button
          type="button"
          disabled={!username}
          title="Close"
          onClick={closeCallback}
          style={{ position: 'relative', display: 'block', margin: '15px auto 0 auto' }}
        >
          <i className="fa fa-times"> Close</i>
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeCallback: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

export default Modal;
