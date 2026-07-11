function Footer() {
  return (
    <footer className="bg-gray-900 pt-12 px-6 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white">
              🍴
            </div>
            <span className="font-serif font-medium text-white">
              Bella Cucina
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Authentic Italian cuisine made fresh daily, right in the heart of
            the city.
          </p>
        </div>

        <div>
          <p className="text-white font-medium text-sm mb-3">Explore</p>
          <div className="flex flex-col gap-2 text-sm">
            <a href="#" className="text-gray-400 hover:text-orange-500">
              Menu
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              About us
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              Reservations
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              Gallery
            </a>
          </div>
        </div>

        <div>
          <p className="text-white font-medium text-sm mb-3">Contact</p>
          <div className="flex flex-col gap-2 text-sm">
            <a href="#" className="text-gray-400 hover:text-orange-500">
              Support
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              Careers
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              Press
            </a>
          </div>
        </div>

        <div>
          <p className="text-white font-medium text-sm mb-3">Visit us</p>
          <p className="text-gray-400 text-sm mb-2">
            📍 42 Varanasi Lane, UP, India
          </p>
          <p className="text-gray-400 text-sm mb-2">📞 +91 98765 43210</p>
          <p className="text-gray-400 text-sm">🕐 11am – 11pm, daily</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-9 pt-5 border-t border-gray-700 flex items-center justify-between">
        <p className="text-gray-500 text-xs">
          © 2026 Bella Cucina. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
