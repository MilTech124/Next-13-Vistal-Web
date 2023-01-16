import React from 'react'

function SocialsNav() {
  return (
    <div className='flex gap-5'>
    <a href='#' className=' transition-all ease-in-out hover:scale-150 hover:bg-red-300 rounded-full hover:rotate-12'> <img src='/svg/facebook.svg'/></a>
    <a href='#' className=' transition-all ease-in-out hover:scale-150 hover:bg-red-300 rounded-full hover:rotate-12'> <img src='/svg/mail_nav.svg'/> </a>
    <a href='#' className=' transition-all ease-in-out hover:scale-150 hover:bg-red-300 rounded-full hover:rotate-12'> <img src='/svg/phone_nav.svg'/></a>
    </div>
  )
}

export default SocialsNav