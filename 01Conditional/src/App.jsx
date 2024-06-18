import React from 'react'
import { useState } from 'react'

const App = () => {

    let tamplate = '';

    const [pshow, setPshow] = useState(false)

    if (pshow) {
        tamplate = <Card/>
    } else {
        tamplate = ''
    }

    // if (pshow) {
    //     tamplate = <>
    //         <p>Welcome To WsCube</p>
    //         <button className='bg-[red] p-4' onClick={()=>{setPshow(!pshow)}}>Hide</button>
    //     </>
    // } else {
    //     tamplate = <button className='bg-[red] p-4' onClick={()=>{setPshow(!pshow)}}>Show</button>
    // }


    return (
        <>
            {tamplate}
        </>
    )
}

export default App



let Card = () => {
    return(
        <h1>Welcome To Ws Cube</h1>
    )
}