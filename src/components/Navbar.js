import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition ${
        scrolled ? "bg-forest shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-8 py-4 text-white">
        <h1 className="font-heading text-2xl"> <Link to="/">The Grove</Link></h1>
        <div className="space-x-6">
          <Link to="/"></Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/reservations">Reservations</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
