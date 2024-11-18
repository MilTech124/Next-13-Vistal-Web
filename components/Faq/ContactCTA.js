// components/ContactCTA.js
export default function ContactCTA() {
  return (
    <section className="bg-blue-500 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Masz więcej pytań?</h2>
        <p className="text-lg mb-6">
          Skontaktuj się z nami, aby uzyskać szczegółowe informacje o naszych produktach i usługach.
        </p>
        <a
          href="/kontakt"
          className="px-6 py-3 bg-white text-blue-500 font-medium rounded shadow hover:bg-gray-100 transition"
        >
          Skontaktuj się
        </a>
      </div>
    </section>
  );
}
