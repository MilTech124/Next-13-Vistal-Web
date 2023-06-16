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
      <meta charSet="utf-8" />
        <meta name="description" content="Firma zajmująca się produkcją oraz sprzedażą garaży blaszanych oferuje wysokiej jakości produkty, dostępne w różnych rozmiarach i kolorach" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="keywords" content="vistal, producent garaży blaszanych, garaże blaszane, blaszaki, garaze drewnopodobne, tanie garaże,solidne garaże, vistal garaże"/>
        <title>Vistal - producent garazy blaszanych</title>
      </Head>
      <ToastContainer />
      <Header />
      <main className="pt-[100px]">{children}</main>
      <Footer />
    </>
  );
}
