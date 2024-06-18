import React from 'react'
import './index.css'
import { useState } from 'react'

const App = () => {
  const [showPassword, setshowPassword] = useState(false)
  const [menu, setmenu] = useState(false)
  return (
    <>
      <button className='micon' onClick={() => { setmenu(!menu) }}>
         {menu ? <span>&times;</span> : <span>&#9776;</span>}

      </button>
      <div className={`menu ${menu ? 'activeMenu' : ''}`}>
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
      <br />
      <br />










      <input type={showPassword ? 'text' : 'password'} placeholder='Enter Your Password' />
      {/* <button onClick={() => { setshowPassword(showPassword ? 'password' : 'text') }}>Show</button> */}
      <button onClick={() => { setshowPassword(!showPassword) }}>
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </>
  )
}

export default App