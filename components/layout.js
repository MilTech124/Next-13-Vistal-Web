import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
  return (
    <>
      
      <Head>
      <meta property="og:title" content="Vistal Garaże Blaszane"/>
      <meta property="og:image" content="http://websites.mil-tech.pl/wp-content/uploads/2023/06/baner.jpg"/>
      </Head>
      <ToastContainer />
      <Header />
      <main className="pt-[100px]">{children}</main>
      <Footer />
    </>
  );
}
