import React from 'react'
import home from './home.png'
import promotion from './promotion.png'
import search from './search.png'
import email from './email.png'
import settings from './settings.png'
import { useState } from 'react'
import Newpopup from './Newpopup'

const Sidebar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (

    <div className='sidebar'>
      <div className='rectangle'></div>
      <img alt='whatever' src={home} className='icons'/>
      <button onClick={handleOpenPopup}>
        <img alt='whatever' src={search} className='icons'/>
      </button>
      <img alt='whatever' src={promotion} className='icons'/>
      <img alt='whatever' src={email} className='icons'/>
      <img alt='whatever' src={settings} className='icons'/>
      {showPopup && <Newpopup onClose={handleClosePopup}/>}
    </div>
    
  )
}

export default Sidebar