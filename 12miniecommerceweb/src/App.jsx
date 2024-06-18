import React, { useEffect, useState } from 'react'
import { Category } from './Category'
import axios from 'axios'
const App = () => {

  let [finalget,setfinalget] =useState([])

  let getCatogery = ()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>{
      return res.data
    })
    .then((finalres)=>{
      setfinalget(finalres)
    })
  }

  useEffect(()=>{
    getCatogery()
    console.log(finalget)
  },[])

  return (
    <>
      <div className='py-[40px]'>
        <div className='max-w-[1320px] mx-auto'>
          <h1 className='text-center text-[40px] font-bold mb-[30px]'>Our Products</h1>
          <div className='grid grid-cols-[30%_auto] gap-[20px]'>
            <div>
              {finalget.length}
              <Category finalget={finalget}/>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4">
                <Productitem/>
                <Productitem/>
                <Productitem/>
                <Productitem/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

function Productitem() {
  return (
    <div className="shadow-lg pb-4">
      <img src="pexels-photo-296282.png" />
      <h4>Hand</h4>
      <p>$88</p>
    </div>
  )
}