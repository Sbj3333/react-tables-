import React from 'react'
import Popup from './Popup'
import { useState } from 'react';

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='navbar'>
        <div className='part1'>
            <p className='student'>Student Log</p>
            <img src='https://pesu.io/_nuxt/img/pes_logo.a8a3c59.png' className='pes'/>
            <button onClick={handleOpenPopup} className='sagar-btn'></button>
            {showPopup && <Popup onClose={handleClosePopup} />}
            {/* <div className='line'></div> */}
        </div>
    </div>
  )
}

export default Navbar
