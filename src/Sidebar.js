import React from 'react'
import home from './home.png'
import promotion from './promotion.png'
import search from './search.png'
import email from './email.png'
import settings from './settings.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='rectangle'></div>
      <img src={home} className='icons'/>
      <img src={search} className='icons'/>
      <img src={promotion} className='icons'/>
      <img src={email} className='icons'/>
      <img src={settings} className='icons'/>
      
    </div>
    
  )
}

export default Sidebar