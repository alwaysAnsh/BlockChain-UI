import React from 'react'
import '../../src/index.css'


const Box = ({blockNumber, speed , size, transactions, weight}) => {
  return (
    <div className='w-32 max-h-36 opacity-70  bg-yellow-100 shadow-yellow-800 shadow-md drop-shadow-2xl flex flex-col gap-1 text-center' >
        <p className='' >{blockNumber}</p>
        <p className='' >{speed}</p>
        <p className='font-bold' >{size}</p>
        <p className='' >{transactions}</p>
        <p className='' >{weight}</p>
    </div>
  )
}

export default Box

