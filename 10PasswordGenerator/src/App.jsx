import React from 'react'
import './App.css'
import { useState } from 'react'
import { LC, NC, SC, UC } from './data/PassChar'

const App = () => {
  const [upperCase, setupperCase] = useState(false)
  const [lowerCase, setlowerCase] = useState(false)
  const [numbers, setnumbers] = useState(false)
  const [symbols, setsymbols] = useState(false)
  const [passwordLen, setpasswordLen] = useState(10)
  const [fPass, setfPass] = useState('')

  let createPassword = () => {
    let charSet = ""
    if (upperCase || lowerCase || numbers || symbols) {
      if (upperCase) charSet += UC
      if (lowerCase) charSet += LC
      if (numbers) charSet += NC
      if (symbols) charSet += SC
      let finalPass = ''
      for(let i=0; i<passwordLen; i++){
        finalPass+= charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setfPass(finalPass)
    } else {
      alert("Please Select atLeast One CheckBox....")
    }
  }

  return (
    <>
      <div className='passwordBox'>
        <h2>Password Generator</h2>
        <div className='passwordBoxin'>
          <input type="text" placeholder='Generated Password' readOnly value={fPass}/> <button>Copy</button>
        </div>
        <div className="passlen">
          <label>Password Length:</label>
          <input type="number" max={20} min={10} value={passwordLen} onChange={(e)=>setpasswordLen(e.target.value)}/>
        </div>
        <div className="passlen">
          <label>Include Uppercase Letter</label>
          <input type="checkbox" checked={upperCase} onChange={() => setupperCase(!upperCase)} />
        </div>
        <div className="passlen">
          <label>Include LowerCase Letter</label>
          <input type="checkbox" checked={lowerCase} onChange={() => setlowerCase(!lowerCase)} />
        </div>
        <div className="passlen">
          <label>Include Number</label>
          <input type="checkbox" checked={numbers} onChange={() => setnumbers(!numbers)} />
        </div>
        <div className="passlen">
          <label>Include Symbols</label>
          <input type="checkbox" checked={symbols} onChange={() => setsymbols(!symbols)} />
        </div>
        <button className='btn' onClick={createPassword}>Generate Password</button>
      </div>
    </>
  )
}

export default App