import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = [
    "General",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-2xl font-bold text-slate-800">
            NewsPh
          </div>
          <div className="hidden lg:flex space-x-6">
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/${cat.toLowerCase()}`}
                className="text-gray-700 hover:text-red-500 font-medium"
              >
                {cat}
              </Link>
            ))}
          </div>

          <div className="lg:hidden relative w-6 h-6">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer absolute top-0 left-0 w-6 h-6 flex flex-col justify-center items-center focus:outline-none"
            >
              <span
                className={`absolute w-6 h-0.5 bg-gray-700 transition-transform duration-300 ease-in-out ${
                  isOpen ? "rotate-45" : "translate-y-[-6px]"
                }`}
              ></span>
              <span
                className={`absolute w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`absolute w-6 h-0.5 bg-gray-700 transition-transform duration-300 ease-in-out ${
                  isOpen ? "-rotate-45" : "translate-y-[6px]"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/${cat.toLowerCase()}`}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
