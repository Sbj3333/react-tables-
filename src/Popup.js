import React from 'react';
import screenshot from './finalpop.png'

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div>
        <img src={screenshot} alt="Popup Image"  className='error'/>
      </div>
      <button onClick={onClose} className="close-btn">X</button>
    </div>
  );
};

export default Popup;
