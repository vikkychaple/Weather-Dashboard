
import React, { useState } from "react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.className = isDarkMode ? "light" : "blue";
  };

  return (
    <nav
      className={`p-4 flex flex-wrap justify-between items-center ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-blue-600 text-white"
      } shadow-md`}
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img
          src="/images/logo1.png" 
          alt="Logo"
          className="w-10 h-10"
        />
        <h1 className="text-2xl font-extrabold tracking-wide">
          Weather Dashboard
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        {["Home", "Features", "Pricing", "API Docs"].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="text-lg hover:font-bold hover:text-yellow-300 transition"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Social Media Icons */}
      <ul className="flex space-x-4 items-center">
       
        <li>
          <a
            href="https://www.linkedin.com/in/vikky-chaple-495869198/"
            className="hover:text-yellow-400 "
            title="LinkedIn"
          >
            <i className="fab fa-linkedin text-lg"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/vikkychaple"
            className="hover:text-yellow-400"
            title="GitHub"
          >
            <i className="fab fa-github text-lg"></i>
          </a>
        </li>
      </ul>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`ml-4 px-4 py-2 text-sm font-medium rounded-lg shadow-md transition ${
          isDarkMode
            ? "bg-yellow-400 text-gray-900 hover:bg-yello-500"
            : "bg-yellow-200 text-black hover:bg-yellow-300"
        }`}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;




