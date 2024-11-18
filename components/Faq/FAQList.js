import { useState } from 'react';

const faqData = [
  {
    question: 'Czym są garaże blaszane i dlaczego warto je wybrać?',
    answer:
      'Garaże blaszane to lekkie konstrukcje wykonane z blachy ocynkowanej, które są ekonomicznym i praktycznym rozwiązaniem do przechowywania pojazdów, narzędzi czy innych przedmiotów. Ich główne zalety to szybki montaż, niska cena oraz możliwość dostosowania do indywidualnych potrzeb klienta.',
  },
  {
    question: 'Jakie są dostępne typy garaży?',
    answer:
      'Oferujemy garaże jedno- i dwustanowiskowe, ocieplane, wiaty oraz garaże wykonane z blachy drewnopodobnej. Wszystkie nasze produkty mogą być personalizowane pod względem rozmiaru, koloru oraz wyposażenia.',
  },
  {
    question: 'Czy garaże blaszane są odporne na warunki atmosferyczne?',
    answer:
      'Tak, nasze garaże blaszane są wykonane z wysokiej jakości blachy ocynkowanej, co zapewnia odporność na korozję, opady deszczu i śniegu. Dodatkowe opcje, takie jak filc antykondensacyjny, minimalizują ryzyko powstawania wilgoci wewnątrz garażu.',
  },
  {
    question: 'Jak mogę złożyć zamówienie na garaż?',
    answer:
      'Możesz złożyć zamówienie poprzez nasz konfigurator online, który pozwala dostosować garaż do Twoich potrzeb. Alternatywnie, możesz skontaktować się z nami telefonicznie lub mailowo, aby uzyskać pomoc w wyborze odpowiedniego produktu.',
  },
  {
    question: 'Czy mogę zobaczyć wizualizację garażu przed zamówieniem?',
    answer:
      'Tak, nasz konfigurator garaży generuje wizualizację projektu w czasie rzeczywistym, co pozwala na lepsze zrozumienie, jak będzie wyglądać Twój garaż.',
  },
  {
    question: 'Jak długo trwa realizacja zamówienia?',
    answer:
      'Standardowy czas realizacji wynosi od 2 do 4 tygodni, w zależności od wybranych opcji personalizacji i obciążenia produkcji. W przypadku zamówień indywidualnych czas realizacji może się wydłużyć.',
  },
  {
    question: 'Czy oferujecie dostawę garażu?',
    answer:
      'Tak, zapewniamy dostawę na terenie całego kraju. Koszt dostawy zależy od lokalizacji i jest ustalany indywidualnie podczas składania zamówienia.',
  },
  {
    question: 'Jak przygotować teren pod montaż garażu?',
    answer:
      'Przed montażem garażu należy przygotować równą i utwardzoną powierzchnię, najlepiej wylewkę betonową lub płyty chodnikowe. To zapewni stabilność i trwałość konstrukcji.',
  },
  {
    question: 'Ile czasu zajmuje montaż garażu?',
    answer:
      'Montaż standardowego garażu zajmuje zwykle od 2 do 4 godzin. W przypadku większych konstrukcji czas może się wydłużyć.',
  },
  {
    question: 'Czy garaż może być wykonany w stylu drewnopodobnym?',
    answer:
      'Tak, oferujemy blachę drewnopodobną, która imituje wygląd drewna, zachowując wszystkie zalety konstrukcji stalowej, takie jak trwałość i odporność na warunki atmosferyczne.',
  },
  {
    question: 'Jak długo trwa żywotność garażu blaszanego?',
    answer:
      'Garaże blaszane wykonane z naszych wysokiej jakości materiałów mogą służyć nawet kilkadziesiąt lat, jeśli są odpowiednio konserwowane. Zalecamy regularne czyszczenie oraz sprawdzanie stanu powłoki antykorozyjnej.',
  },
  {
    question: 'Jak zabezpieczyć garaż przed silnymi wiatrami?',
    answer:
      'Nasze garaże są zaprojektowane tak, aby wytrzymywały trudne warunki atmosferyczne. Dla dodatkowego zabezpieczenia zalecamy kotwienie garażu do podłoża lub wykonanie wylewki betonowej.',
  },
  {
    question: 'Czy mogę zainstalować automatykę do istniejącej bramy?',
    answer:
      'Tak, nasza automatyka może być dostosowana do większości istniejących bram garażowych. Skontaktuj się z nami, aby sprawdzić kompatybilność Twojej bramy.',
  },
  {
    question: 'Jak zgłosić usterkę garażu?',
    answer:
      'W przypadku problemów z garażem prosimy o kontakt z naszym działem obsługi klienta. Wypełnij formularz reklamacyjny dostępny na naszej stronie lub skontaktuj się telefonicznie.',
  },
];

export default function FAQList() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQ = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="container mx-auto py-12">
      <div className="mb-8">
        <input
          type="text"
          placeholder="Szukaj pytań..."
          className="w-full p-4 border rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <ul className="space-y-6">
        {filteredFAQ.map((faq, index) => (
          <li key={index} className="p-4 bg-gray-50 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
