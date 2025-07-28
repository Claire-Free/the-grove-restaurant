

// import { MapPin, Mail, Phone, Instagram } from "lucide-react";

// export default function Contact() {
//   return (
//     <div className="bg-white min-h-screen">
//       {/* Hero Banner */}
//       <section className="relative h-[40vh]">
//         <img
//           src="/contact-hero.jpg" 
//           alt="Contact"
//           className="absolute w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
//           <h1 className="text-5xl font-heading mb-2">Get in Touch</h1>
//           <p className="text-lg font-light">We’d love to hear from you!</p>
//         </div>
//       </section>

//       {/* Contact Info */}
//       <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
//         {/* Info Card */}
//         <div className="space-y-6">
//           <h2 className="text-3xl font-heading mb-4">Visit Us</h2>

//           <div className="flex items-center gap-3">
//             <MapPin className="text-terracotta" />
//             <p>123 Grove St, Los Angeles, CA</p>
//           </div>

//           <div className="flex items-center gap-3">
//             <Mail className="text-terracotta" />
//             <p>hello@thegrovekitchen.com</p>
//           </div>

//           <div className="flex items-center gap-3">
//             <Phone className="text-terracotta" />
//             <p>(555) 123-4567</p>
//           </div>

//           <p>
//             <strong>Hours:</strong>
//             <br /> Mon–Fri: 11am – 10pm
//             <br /> Sat–Sun: 9am – 11pm
//           </p>

//           <a
//             href="https://www.instagram.com/thegrove"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 text-terracotta hover:underline"
//           >
//             <Instagram /> Follow us on Instagram
//           </a>
//         </div>

      
//          <iframe
//    title="The Grove Location Map"
//    className="flex-1 rounded-xl shadow-lg h-64 md:h-auto"
//    src="https://www.google.com/maps/embed?..."
//    loading="lazy"
//  />
//       </section>

//       {/* CTA Section */}
//       <section className="bg-forest text-white text-center py-12">
//         <h2 className="text-3xl font-heading mb-4">Host Your Event With Us</h2>
//         <p className="mb-6">
//           From intimate dinners to large celebrations, The Grove is the perfect
//           backdrop for your next event.
//         </p>
//         <button className="bg-terracotta px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
//           Inquire About Events
//         </button>
//       </section>
//     </div>
//   );
// }
import { MapPin, Mail, Phone, Instagram } from "lucide-react";
import contactHero from "../assets/contact-hero.jpg"; // ✅ import image

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[80vh]">
        <img
          src={contactHero} // ✅ Use imported image
          alt="Contact"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-heading mb-2">Get in Touch</h1>
          <p className="text-lg font-light">We’d love to hear from you!</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Info Card */}
        <div className="space-y-6">
          <h2 className="text-3xl font-heading mb-4">Visit Us</h2>

          <div className="flex items-center gap-3">
            <MapPin className="text-terracotta" />
            <p>123 Grove St, Los Angeles, CA</p>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-terracotta" />
            <p>hello@thegrovekitchen.com</p>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-terracotta" />
            <p>(555) 123-4567</p>
          </div>

          <p>
            <strong>Hours:</strong>
            <br /> Mon–Fri: 11am – 10pm
            <br /> Sat–Sun: 9am – 11pm
          </p>

          <a
            href="https://www.instagram.com/thegrove"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-terracotta hover:underline hover:scale-105 transition"
          >
            <Instagram /> Follow us on Instagram
          </a>
        </div>

        {/* Map Embed */}
                  <iframe
   title="The Grove Location Map"
   className="flex-1 rounded-xl shadow-lg h-64 md:h-auto"
   src="https://www.google.com/maps/embed?..."
   loading="lazy"
 />
      </section>

      {/* CTA Section */}
      <section className="bg-forest text-white text-center py-12">
        <h2 className="text-3xl font-heading mb-4">Host Your Event With Us</h2>
        <p className="mb-6 max-w-2xl mx-auto text-lg leading-relaxed">
          From intimate dinners to milestone celebrations, The Grove offers a
          stunning backdrop, locally-inspired menus, and personalized service to
          make every event unforgettable.
        </p>
        <button className="bg-terracotta px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
          Inquire About Events
        </button>
      </section>
    </div>
  );
}
