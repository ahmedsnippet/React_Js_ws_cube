import React from 'react'
import { useState } from 'react'
import btnModule from "./Button.module.css"

const App = () => {
  const [status, setstatus] = useState(false)
  return (
    <div className='App'>
      <button className={btnModule.error}>Error</button>
      <br />
      <br />
      <button onClick={()=>{setstatus(!status)}}>
      {(status)
        ? 
        'Hide'
        :
        'Show'
      }
      </button>
      {(status)
        ? 
        <p>Welcome To Ws Cube</p>
        :
        ''
      }





    </div>
  )
}

export default App