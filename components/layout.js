import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
  return (
    <>
   
      {/* Same as */}
      <ToastContainer />
      <Header />
      <main className="pt-[100px]">{children}</main>
      <Footer />
    </>
  );
}
