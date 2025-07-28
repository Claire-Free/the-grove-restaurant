// src/pages/Home.jsx
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div className="bg-beige">
    
// <section className="relative h-[90vh]">
//   <video
//     src="/hero.mp4"
//     autoPlay
//     loop
//     muted
//     playsInline
//     className="absolute w-full h-full object-cover"
//   />
//   <div className="absolute inset-0 bg-black/10 flex flex-col justify-center items-center text-white">
//     <h1 className="text-6xl font-heading mb-4">The Grove Kitchen & Bar</h1>
//     <p className="text-lg mb-6 font-light">
//       Seasonal, locally-sourced dining in the heart of Los Angeles.
//     </p>
//     <button className="bg-terracotta px-6 py-3 rounded-lg text-white font-semibold hover:scale-105 transition">
//       Book a Table
//     </button>
//   </div>


//         <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
//           <h1 className="text-6xl font-heading mb-4">The Grove Kitchen & Bar</h1>
//           <p className="text-lg mb-6 font-light">
//             Seasonal, locally-sourced dining in the heart of Los Angeles.
//           </p>
//           <Link to="/reservations">
//   <button className="bg-terracotta px-6 py-3 rounded-lg text-white font-semibold hover:scale-105 transition">
//     Book a Table
//   </button>
// </Link>
//         </div>
//       </section>
//       <section className="py-16 px-8 text-center bg-beige">
//   <h2 className="text-4xl font-heading mb-8">Signature Dishes</h2>
//   <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//     {[
//       { filename: "dish1.jpg", alt: "Vegetarian starter flatlay" },
//       { filename: "dish2.jpg", alt: "Elegant plated entrée" },
//       { filename: "dish3.jpg", alt: "Farm ingredient still life" },
//     ].map((d, i) => (
//       <div key={i} className="overflow-hidden rounded-xl shadow-lg">
//         <img
//           src={`/${d.filename}`}
//           alt={d.alt}
//           className="w-full h-[500px] object-cover hover:scale-110 transition-transform duration-500"
//         />
//       </div>
//     ))}
//   </div>
// </section>


//       <section className="flex flex-col md:flex-row items-center gap-8 px-8 py-16 bg-white">
//   <img
//     src="/farm.jpg" 
//     alt="Our Story"
//     className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
//   />
//   <div className="md:w-1/2">
//     <h2 className="text-4xl font-heading mb-4">Our Story</h2>
//     <p className="text-lg text-gray-700 mb-4 leading-relaxed">
//       The Grove Kitchen & Bar was born out of a love for seasonal cooking and 
//       the belief that food is at its best when shared with the people you love. 
//       Our chefs work hand-in-hand with local farmers and artisans, crafting dishes 
//       that highlight the vibrant flavors of California’s freshest produce, meats, 
//       and seafood.
//     </p>
//     <p className="text-lg text-gray-700 leading-relaxed">
//       Every plate tells the story of where it came from—the farm, the ocean, 
//       the hands that harvested and prepared it. Whether you’re here for a 
//       celebratory dinner, a weekend brunch, or a quiet glass of wine at the bar, 
//       we want you to feel at home, nourished, and connected to the food on your plate.
//     </p>
//   </div>
// </section>


//       {/* Reservation CTA */}
//       <section className="text-center py-16 bg-forest text-white">
//         <h2 className="text-3xl font-heading mb-4">Ready to Dine With Us?</h2>
//         <button className="bg-terracotta px-6 py-3 rounded-lg hover:scale-105 transition">
//           Reserve a Table
//         </button>
//       </section>
//     </div>
//   );
// }

// src/pages/Home.jsx
import { Link } from "react-router-dom";
import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";
import dish3 from "../assets/dish3.jpg";
import chef from "../assets/chef.jpg";
import dining from "../assets/dining.jpg";


export default function Home() {
  return (
    <div className="bg-beige">
      {/* Hero Section */}
      <section className="relative h-[90vh]">
        <video
          src={`${process.env.PUBLIC_URL}/hero.mp4`}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0  flex flex-col justify-center items-center text-white"> */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white pt-[100px]">

          <h1 className="text-6xl font-heading mb-4">The Grove Kitchen & Bar</h1>
          <p className="text-lg mb-6 font-light">
            Seasonal, locally-sourced dining in the heart of Los Angeles.
          </p>
          <Link to="/reservations">
            <button className="bg-terracotta px-6 py-3 rounded-lg text-white font-semibold hover:scale-105 transition">
              Book a Table
            </button>
          </Link>
        </div>
      </section>

      {/* Signature Dishes */}
      {/* <section className="py-16 px-8 text-center bg-beige">
        <h2 className="text-4xl font-heading mb-8">Signature Dishes</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { filename: "dish1.jpg", alt: "Vegetarian starter flatlay" },
            { filename: "dish2.jpg", alt: "Elegant plated entrée" },
            { filename: "dish3.jpg", alt: "Farm ingredient still life" },
          ].map((d, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={`${process.env.PUBLIC_URL}/${d.filename}`}
                alt={d.alt}
                className="w-full h-[500px] object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section> */}
      <section className="py-16 px-8 text-center bg-beige">
  <h2 className="text-4xl font-heading mb-8">Signature Dishes</h2>
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[dish1, dish2, dish3].map((img, i) => (
      <div key={i} className="overflow-hidden rounded-xl shadow-lg">
        <img
          src={img}
          alt={`Signature Dish ${i + 1}`}
          className="w-full h-[500px] object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
    ))}
  </div>
</section>
 <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <img
          src={dining}
          alt="Dining"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
          <h1 className="text-6xl font-heading mb-2">Our Story</h1>
          <p className="text-lg font-light">Crafted with passion, inspired by California.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={chef}
          alt="Chef"
          className="rounded-xl shadow-lg object-cover w-full h-[400px]"
        />
        <div>
          <h2 className="text-4xl font-heading mb-4">A Farm-to-Table Experience</h2>
          <p className="text-lg mb-4">
            The Grove Kitchen & Bar celebrates California’s rich agriculture
            by working hand-in-hand with local farmers, fishermen, and artisans.
          </p>
          <p className="text-lg mb-6">
            Our menu changes with the seasons, blending rustic techniques with
            modern flavors. Every dish tells the story of its origins—whether
            from the coast, farm, or vineyard.
          </p>

          <ul className="space-y-2 text-lg">
            <li>🍷 Curated California Wine List</li>
            <li>🌿 Locally-Sourced Organic Ingredients</li>
            <li>🔥 Wood-Fired Cooking</li>
          </ul>
        </div>
      </section>
    </div>
{/* 
<section className="flex flex-col md:flex-row items-center gap-8 px-8 py-16 bg-white">
  <img
    src={farm}
    alt="Our Story"
    className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
  />
  <div className="md:w-1/2">
    <h2 className="text-4xl font-heading mb-4">Our Story</h2>
    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
      The Grove Kitchen & Bar was born out of a love for seasonal cooking and 
      the belief that food is at its best when shared with the people you love. 
      Our chefs work hand-in-hand with local farmers and artisans, crafting dishes 
      that highlight the vibrant flavors of California’s freshest produce, meats, 
      and seafood.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed">
      Every plate tells the story of where it came from—the farm, the ocean, 
      the hands that harvested and prepared it. Whether you’re here for a 
      celebratory dinner, a weekend brunch, or a quiet glass of wine at the bar, 
      we want you to feel at home, nourished, and connected to the food on your plate.
    </p>
  </div>
</section> */}


      {/* Our Story */}
      {/* <section className="flex flex-col md:flex-row items-center gap-8 px-8 py-16 bg-white">
        <img
          src={`${process.env.PUBLIC_URL}/farm.jpg`}
          alt="Our Story"
          className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
        />
        <div className="md:w-1/2">
          <h2 className="text-4xl font-heading mb-4">Our Story</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            The Grove Kitchen & Bar was born out of a love for seasonal cooking and 
            the belief that food is at its best when shared with the people you love. 
            Our chefs work hand-in-hand with local farmers and artisans, crafting dishes 
            that highlight the vibrant flavors of California’s freshest produce, meats, 
            and seafood.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every plate tells the story of where it came from—the farm, the ocean, 
            the hands that harvested and prepared it. Whether you’re here for a 
            celebratory dinner, a weekend brunch, or a quiet glass of wine at the bar, 
            we want you to feel at home, nourished, and connected to the food on your plate.
          </p>
        </div>
      </section> */}

      {/* Reservation CTA */}
      <section className="text-center py-16 bg-forest text-white">
        <h2 className="text-3xl font-heading mb-4">Ready to Dine With Us?</h2>
        <Link to="/reservations">
          <button className="bg-terracotta px-6 py-3 rounded-lg hover:scale-105 transition">
            Reserve a Table
          </button>
        </Link>
      </section>
    </div>
  );
}
