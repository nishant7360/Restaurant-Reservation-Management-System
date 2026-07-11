import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="bg-white font-sans">
      <section className="text-center py-20 px-6 bg-orange-50">
        <p className="text-orange-600 text-sm font-medium uppercase tracking-wide mb-3">
          Authentic Italian Cuisine
        </p>
        <h1 className="text-4xl font-serif font-medium text-gray-900 max-w-xl mx-auto mb-4">
          Fresh flavors, made with love
        </h1>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          Handmade pasta, wood-fired pizza, and seasonal dishes crafted daily in
          the heart of the city.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/reserve"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-orange-600 text-white font-medium hover:bg-orange-700"
          >
            Reserve a table
          </Link>
          <button className="px-8 py-3.5 rounded-full bg-white border border-gray-300 text-gray-900 font-medium hover:bg-gray-50">
            View menu
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto py-14 px-6">
        {[
          {
            icon: "🥘",
            title: "Fresh ingredients",
            desc: "Sourced daily from local farms",
          },
          {
            icon: "🔥",
            title: "Wood-fired oven",
            desc: "Authentic Neapolitan style",
          },
          {
            icon: "👨‍👩‍👧",
            title: "Family friendly",
            desc: "Warm space for everyone",
          },
        ].map((item) => (
          <div key={item.title} className="text-center">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-3 text-xl">
              {item.icon}
            </div>
            <p className="font-medium text-gray-900 mb-1">{item.title}</p>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
