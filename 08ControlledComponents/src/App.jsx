import React from 'react'
import { useState } from 'react'
const App = () => {

  const [uname, setuname] = useState('')
  const [password, setpassword] = useState('')

  let handleSubmit = (e)=>{
    e.preventDefault()
    console.log(uname,password)
  }

  // let getuname = (e)=>{
  //   // e.target.value
  //   setuname(e.target.value)
  // console.log(uname)
  // }
  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">username: </label> <br />
              <input onChange={(e)=>{setuname(e.target.value)}} type="text" placeholder='Enter Your Username' value={uname}/> <br /> <br />
              <label htmlFor="username">password: </label> <br />
              <input onChange={(e)=>{setpassword(e.target.value)}} type="text" placeholder='Enter Your password' className='form-controll' value={password} />
              <br /><br />
              <button>logIn</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App