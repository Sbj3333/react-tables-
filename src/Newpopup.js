import React from 'react';
import screenshot from './error.png'

const Newpopup = ({ onClose }) => {
  return (
    <div className="popup">
      <div>
        <img src={screenshot} alt="Popup"  className='error'/>
      </div>
      <button onClick={onClose} className="close-btn">X</button>
    </div>
  );
};

export default Newpopup;
