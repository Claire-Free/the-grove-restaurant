export default function Menu() {
  const menuSections = [
    {
      title: "Starters",
      items: [
        { name: "Charcuterie Board", price: "$18" },
        { name: "Burrata & Heirloom Tomatoes", price: "$15" },
      ],
    },
    {
      title: "Mains",
      items: [
        { name: "Pan-Seared Salmon", price: "$28" },
        { name: "Filet Mignon", price: "$42" },
      ],
    },
    {
      title: "Cocktails",
      items: [
        { name: "Smoky Old Fashioned", price: "$14" },
        { name: "Seasonal Spritz", price: "$12" },
      ],
    },
    {
      title: "Desserts",
      items: [
        { name: "Flourless Chocolate Cake", price: "$10" },
        { name: "Citrus Panna Cotta", price: "$9" },
      ],
    },
  ];

  return (
    <div className="bg-beige min-h-screen py-20 px-6">
      <h1 className="text-5xl font-heading text-center mb-12">Our Menu</h1>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {menuSections.map((section, i) => (
          <div key={i}>
            <h2 className="text-3xl font-heading mb-4">{section.title}</h2>
            <ul className="space-y-3">
              {section.items.map((item, j) => (
                <li
                  key={j}
                  className="flex justify-between border-b border-gray-300 pb-2"
                >
                  <span>{item.name}</span>
                  <span className="font-semibold">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
