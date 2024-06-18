import React from 'react'
import './App.css'
import { useState } from 'react'
const App = () => {
  const [openModal, setopenModal] = useState(false)
  return (
    <>
    <button className='en' onClick={()=>{setopenModal(true)}}>Enquire Now</button>
    <div className={`modalOverLay ${openModal ? 'modalShow' : ''} `}>
    <div className={`modalDiv ${openModal ? 'showModalDiv' : ''} `}>
      <h3>Enrolled Now <span  onClick={()=>{setopenModal(false)}}>&times;</span></h3>
    </div>
    </div>
    </>
  )
}

export default App