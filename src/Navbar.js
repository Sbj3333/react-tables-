import React from 'react'
import Popup from './Popup'
import { useState } from 'react';
import logo from './pes.png'

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
            <img src={logo} alt='logo' className='pes' style={{height:'70px', borderRadius:'10px', marginLeft:'35vw', aspectRatio:'2'}}/>
            <button onClick={handleOpenPopup} className='sagar-btn'></button>
            {showPopup && <Popup onClose={handleClosePopup} />}
            
            {/* <div className='line'></div> */}
        </div>
    </div>
  )
}

export default Navbar
