// components/FAQHero.js
import Image from 'next/image';

export default function FAQHero() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Często Zadawane Pytania</h1>
        <p className="text-lg text-gray-600 mb-8">
          Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych garaży blaszanych i usług.
        </p>
        <Image
          src="/o-nas.jpg"
          alt="Ilustracja garażu blaszanego"
          width={600}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
    </section>
  );
}