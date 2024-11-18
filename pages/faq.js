// pages/faq.js
import FAQHero from '../components/Faq/FAQHero';
import FAQList from '../components/Faq/FAQList';
import ContactCTA from '../components/Faq/ContactCTA';
import Head from 'next/head';

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>FAQ - Często Zadawane Pytania</title>
        <meta name="description" content="Najczęściej zadawane pytania dotyczące garaży blaszanych, konfiguratora garaży oraz procesu zamówienia i montażu." />
        <meta name="keywords" content="garaże blaszane FAQ, konfigurator garaży, montaż garażu, pytania o garaże" />
      </Head>
      <main>
        <FAQHero />
        <FAQList />
        <ContactCTA/>
      </main>
    </>
  );
}