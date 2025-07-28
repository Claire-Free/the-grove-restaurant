export default function Reservations() {
  return (
    <div className="bg-beige min-h-screen py-20 px-6 flex flex-col items-center">
      <h1 className="text-5xl font-heading mb-8">Book a Table</h1>
      <form className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border p-3 rounded-lg"
        />
        <input
          type="number"
          placeholder="Guests"
          className="w-full border p-3 rounded-lg"
        />
        <input
          type="date"
          className="w-full border p-3 rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-terracotta text-white py-3 rounded-lg hover:scale-105 transition"
        >
          Reserve Now
        </button>
      </form>
    </div>
  );
}
