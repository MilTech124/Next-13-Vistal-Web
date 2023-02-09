

import Footer from './Footer/Footer'
import Header from './Header/Header'
import { useRouter } from "next/router";
import { appWithTranslation } from 'next-i18next'

export default function Layout({ children }) {
  const {locale} = useRouter()
  
  return (
    <>
      <Header />
       <main>{children}</main>
      <Footer/>
    </>
  )
  
}