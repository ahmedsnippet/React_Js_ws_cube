import React from 'react'

export const Category = ({ finalget }) => {

    let get = finalget.map((v, i) => {
        return (
            <li key={i} className='bg-gray-500 font-bold py-[10px] text-lg cursor-pointer mb-2'>Bracelet
                {v}
            </li>
        )
    })

    return (
        <>
            <h1 className='text-[25px] font-bold py-[10px]'>Product Category</h1>
            <ul>
                {get}
            </ul>
        </>
    )
}
