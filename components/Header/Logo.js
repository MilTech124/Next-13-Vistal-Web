import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const logo = {
    with:'auto',
    height: 'auto'
}

function Logo() {
  return (
   <Link href='/'><Image className={logo} src='/vistal-logo.jpg' width='150' height='70' alt='logo-vistal'  /></Link> 
    
  )
}

export default Logo