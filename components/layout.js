

import Footer from './Footer/Footer'
import Header from './Header/Header'
import Head from 'next/head'


export default function Layout({ children }) {

  
  return (
    <>
      <Header />
       <main className='pt-[100px]'>{children}</main>
      <Footer/>
    </>
  )
  
}