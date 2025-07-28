export default function About() {
  return (
    <div className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <img
          src="/farm.jpg"
          alt="Farm"
          className="w-full md:w-1/2 rounded-xl shadow-lg"
        />
        <div className="md:w-1/2">
          <h1 className="text-5xl font-heading mb-6">Our Story</h1>
          <p className="text-lg mb-4">
            At The Grove Kitchen & Bar, we believe food should be honest,
            seasonal, and inspired by the local bounty of California. Our chefs
            work directly with farmers to bring the freshest ingredients to your
            table.
          </p>
          <p className="text-lg">
            Our menu changes with the seasons, reflecting the best of what’s
            growing locally. From farm-fresh vegetables to sustainably raised
            meats, every dish tells a story.
          </p>
        </div>
      </div>
    </div>
  );
}
