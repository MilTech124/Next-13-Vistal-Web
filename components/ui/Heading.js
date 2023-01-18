import React from 'react'

function Heading({title}) {
  return (
    <div className='pt-10'>
        <h1 className='text-6xl font-bold p-5 text-red-700'>{title}</h1>
        <div className='w-full h-5 bg-slate-500'></div>
        <div className='w-full h-5 bg-red-700'></div>
    </div>
  )
}

export default Heading