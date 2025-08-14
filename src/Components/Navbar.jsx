import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Services", path: "/services" },
  ];

  return (
    <header className="bg-gradient-to-r from-purple-900/80 to-indigo-900/80 backdrop-blur-lg border-b border-white/10 relative">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          Nexgen <span className="text-purple-400">Educare</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-200 hover:text-white text-xl font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-purple-900/95 border-t border-white/10 px-4 py-3 space-y-3"
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-gray-200 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/enroll"
              className="block rounded-lg bg-purple-500 px-5 py-2 text-sm font-medium text-white shadow-lg hover:bg-purple-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Enroll Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
