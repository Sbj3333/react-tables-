import React from 'react'
import './styles.css'
import Sidebar from "./Sidebar";
import Table from "./Table";

const App = () => {
  return (
    <div className='app'>
      <Sidebar/>
      <Table/>
    </div>
  )
}

export default App