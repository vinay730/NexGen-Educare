import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeAll = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    {
      name: "Courses",
      dropdown: true,
      href: "/courses", // fallback link for mobile
      courses: [
        { name: "LLB", href: "/courses/llb" },
        { name: "CLAT", href: "/courses/clat" },
        { name: "Judiciary", href: "/courses/judiciary" },
        { name: "NET", href: "/courses/net" },
      ],
    },
    { name: "Contact", href: "#contact" },
  ];

  const locationLink = { name: "Location", href: "#location" };

  return (
    <nav className="bg-[#0D92F4] text-white font-semibold w-full sticky top-0 z-50 shadow-md text-center">
      <div className="flex items-center justify-between h-16 w-full px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover mr-3"
          />
       
        </div>

        {/* Centered Nav Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-6 items-center">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center hover:text-blue-200 transition"
                >
                  {link.name}
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded shadow-md w-40 z-10">
                    {link.courses.map((course) => (
                      <a
                        key={course.name}
                        href={course.href}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2 hover:bg-blue-100"
                      >
                        {course.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-200 transition"
              >
                {link.name}
              </a>
            )
          )}
        </div>

        {/* Location on right */}
        <div className="hidden md:flex items-center">
          <a
            href={locationLink.href}
            className="hover:text-blue-200 transition"
          >
            {locationLink.name}
          </a>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation (Dropdown replaced by regular link) */}
      {isOpen && (
        <div className="md:hidden w-full bg-[#0D92F4] px-4 pb-4">
          {[...navLinks, locationLink].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 hover:text-blue-200"
              onClick={closeAll}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
