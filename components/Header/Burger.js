import React from 'react'

function Burger({open,openMenu}) {
  return (
    
     (!open) ? <div onClick={openMenu} className='text-4xl pr-5'>=</div> : <div onClick={openMenu} className='text-4xl pr-5'>x</div>
  )
}

export default Burger