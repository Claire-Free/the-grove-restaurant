// export default function Reservations() {
//   return (
//     <div className="bg-beige min-h-screen py-20 px-6 flex flex-col items-center">
//       <h1 className="text-5xl font-heading mb-8">Book a Table</h1>
//       <form className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4">
//         <input
//           type="text"
//           placeholder="Your Name"
//           className="w-full border p-3 rounded-lg"
//         />
//         <input
//           type="email"
//           placeholder="Email Address"
//           className="w-full border p-3 rounded-lg"
//         />
//         <input
//           type="number"
//           placeholder="Guests"
//           className="w-full border p-3 rounded-lg"
//         />
//         <input
//           type="date"
//           className="w-full border p-3 rounded-lg"
//         />
//         <button
//           type="submit"
//           className="w-full bg-terracotta text-white py-3 rounded-lg hover:scale-105 transition"
//         >
//           Reserve Now
//         </button>
//       </form>
//     </div>
//   );
// }

import { Calendar, Clock, Users } from "lucide-react";

export default function Reservations() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      {/* <section className="relative h-[40vh]">
        <img
          src="/reservations-hero.jpg"
          alt="Dining Table"
          className="absolute w-full h-full object-cover"
        /> */}
        <section className="relative h-[80vh]">
  <img
    src={`${process.env.PUBLIC_URL}/reservations-hero.jpg`}
    alt="Reservations Hero"
    className="absolute w-full h-full object-cover"
  />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-heading mb-2">Reserve Your Table</h1>
          
        </div>
      </section>

      {/* Reservation Form */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-beige p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-heading mb-6 text-center">
            Book Your Experience
          </h2>

          <form className="grid gap-6">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-terracotta"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-terracotta"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block mb-1 font-medium flex items-center gap-2">
                  <Calendar /> Date
                </label>
                <input
                  type="date"
                  className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-terracotta"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium flex items-center gap-2">
                  <Clock /> Time
                </label>
                <input
                  type="time"
                  className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-terracotta"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium flex items-center gap-2">
                  <Users /> Guests
                </label>
                <input
                  type="number"
                  min="1"
                  className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-terracotta"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-terracotta text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transition"
            >
              Reserve Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

