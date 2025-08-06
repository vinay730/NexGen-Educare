import ContactForm from "./ContactForm";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-500 to-indigo-600  text-white py-12 px-4 sm:px-6 lg:px-8 font-semibold">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left section */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-4 flex flex-col items-center">
            <img src={logo} alt="Logo" className="w-16 h-16 rounded-full mb-2" />
            THE NW CAREER <br/> <p className="text-sm font-normal ">EDUCATION COLLEGE</p>
          </h3>
          <p className="text-sm max-w-xs mx-auto">
            We offer all levels of courses to students across the world. We want
            our students to excel.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline hover:text-blue-200">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline hover:text-blue-200">
                About
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:underline hover:text-blue-200">
                Courses
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline hover:text-blue-200">
                Contact
              </a>
            </li>
            <li>
              <a href="/location" className="hover:underline hover:text-blue-200">
                Location
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col items-center text-center">
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <p>
            Email:{" "}
            <a href="mailto:thenwcareereducationcollege@gmail.com" className="hover:underline">
              thenwcareereducationcollege@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+14039214529" className="hover:underline">
              +1 403-921-4529
            </a>
          </p>
          <p>Address: Calgary, AB, Canada, Alberta</p>

          {/* Social Media */}
          <div className="mt-4 flex justify-center space-x-4 text-blue-100">
            <a
              href="https://www.facebook.com/profile.php?id=100093489465093"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com/nwcareer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-white"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com/nwcareer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com/company/nwcareer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-blue-300 pt-4 text-center text-sm text-blue-200">
        &copy; {new Date().getFullYear()} The NW Career Education College. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
