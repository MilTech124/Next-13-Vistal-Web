import React from 'react'

function SocialsNav() {
  return (
    <div className='flex max-sm:hidden items-center gap-5 pb-2 border-b-2 border-b-slate-600 '>
    <a href='https://www.facebook.com/VistalGaraze'  className='text-xs flex flex-col items-center' > <img className=' transition-all ease-in-out hover:scale-150 hover:bg-red-300 rounded-full hover:rotate-12' src='/svg/facebook.svg'/>Facebook</a>
    <a href='mailto:kontakt@vistal-garaze-blaszane.pl' className='text-xs flex flex-col items-center'> <img  className=' transition-all ease-in-out hover:scale-150 hover:bg-red-300 rounded-full hover:rotate-12' src='/svg/mail_nav.svg'/>kontakt@vistal-garaze-blaszane.pl </a>
    <a href='tel:+48 693344132' className='text-xs flex flex-col items-center'> <img className=' transition-all ease-in-out hover:scale-150 hover:bg-red-300 rounded-full hover:rotate-12' src='/svg/phone_nav.svg'/>kontakt +48 693 344 132</a>
    <a href='mailto:sprzedaz@vistal-garaze-blaszane.pl' className='text-xs flex flex-col items-center'> <img  className=' transition-all ease-in-out hover:scale-150 hover:bg-red-300 rounded-full hover:rotate-12' src='/svg/mail_nav.svg'/>sprzedaz@vistal-garaze-blaszane.pl </a>
    <a href='tel:+48  538600019' className='text-xs flex flex-col items-center'> <img className=' transition-all ease-in-out hover:scale-150 hover:bg-red-300 rounded-full hover:rotate-12' src='/svg/phone_nav.svg'/>sprzedaż +48  538 600 019</a>
  
    </div>
  )
}

export default SocialsNav