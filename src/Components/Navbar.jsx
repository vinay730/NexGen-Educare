import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeAll = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  const allCourses = [
    { name: "Bartending", href: "bartender-training" },
    { name: "Digital", href: "digital-marketing" },
    { name: "Real Estate", href: "real-estate" },
    { name: "Makeup", href: "makeup-artist" },
    { name: "IT Course", href: "it-course" },
    { name: "Photography", href: "photography" },
    { name: "Event Planning", href: "event-planning" },
    { name: "Guitar Lessons", href: "guitar-lessons" },
    { name: "Reception Skill", href: "receptionist-training" },
    { name: "Basic Accounting", href: "basic-accounting" },
    { name: "Interpreter/Translator", href: "translator" },
    { name: "Graphic Design", href: "graphic-design" },
    { name: "Sales Training", href: "sales-training" },
    { name: "Sign Language", href: "sign-language" },
    { name: "Security Guard", href: "security-guard" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Courses",
      dropdown: true,
      courses: allCourses,
    },
    { name: "Contact", href: "/contact" },
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const suggestions = allCourses.filter((course) =>
      course.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredCourses(value ? suggestions : []);
  };

  const handleSuggestionClick = (href) => {
    setSearchTerm("");
    setFilteredCourses([]);
    navigate(`/courses/${href}`);
  };

  return (
    <nav className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold w-full sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded shadow-md w-max z-10 p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                      {link.courses.map((course) => (
                        <a
                          key={course.name}
                          href={`/courses/${course.href}`}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-4 py-2 hover:bg-blue-100 rounded whitespace-nowrap"
                        >
                          {course.name}
                        </a>
                      ))}
                    </div>
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

        {/* Search Bar (Hidden on Mobile) */}
        <div className="hidden md:flex flex-col relative w-64">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for courses..."
            className="px-3 py-3 rounded-md text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          />
          {filteredCourses.length > 0 && (
            <div className="absolute top-11 left-0 w-full bg-white text-gray-800 shadow-lg rounded-md z-20 max-h-60 overflow-auto">
              {filteredCourses.map((course) => (
                <div
                  key={course.name}
                  onClick={() => handleSuggestionClick(course.href)}
                  className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                >
                  {course.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden w-full bg-gradient-to-br from-blue-500 to-indigo-600 px-4 pb-4">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name}>
                <a href="/courses" className="block py-2" onClick={closeAll}>
                  {link.name}
                </a>
              </div>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 hover:text-blue-200"
                onClick={closeAll}
              >
                {link.name}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
