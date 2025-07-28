


const menuItems = {
  appetizers: [
    { name: "Charred Brussels Sprouts", description: "With balsamic glaze and toasted almonds", price: "$12" },
    { name: "Roasted Beet Salad", description: "Arugula, goat cheese, candied pecans, citrus vinaigrette", price: "$14" },
    { name: "Spicy Tuna Tartare", description: "Avocado, sesame seeds, crispy wontons", price: "$16" },
  ],
  mains: [
    { name: "Grilled Organic Chicken", description: "Herb butter, seasonal vegetables, roasted potatoes", price: "$28" },
    { name: "Pan-Seared Salmon", description: "Lemon dill sauce, quinoa salad", price: "$32" },
    { name: "Wild Mushroom Risotto", description: "Parmesan, truffle oil drizzle", price: "$26" },
  ],
  desserts: [
    { name: "Chocolate Lava Cake", description: "Vanilla bean ice cream, raspberry coulis", price: "$10" },
    { name: "Seasonal Fruit Tart", description: "Fresh cream, buttery crust", price: "$9" },
    { name: "Lemon Panna Cotta", description: "Berry compote, mint garnish", price: "$9" },
  ],
};

export default function Menu() {
  return (
    <div className="bg-beige min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[80vh] w-full overflow-hidden">
       <video
  src={`${process.env.PUBLIC_URL}/menu-hero.mp4`}
  autoPlay
  loop
  muted
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover min-w-full min-h-full"
/>

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-heading mb-2">Our Menu</h1>
          <p className="text-lg font-light tracking-wide">Seasonal. Local. Inspired.</p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        {Object.entries(menuItems).map(([section, items]) => (
          <div key={section} className="mb-12">
            <h2 className="text-4xl font-heading mb-8 capitalize border-b border-terracotta pb-2">
              {section}
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {items.map(({ name, description, price }, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-2">{name}</h3>
                  <p className="text-gray-600 mb-4">{description}</p>
                  <p className="text-terracotta font-semibold text-lg">{price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
