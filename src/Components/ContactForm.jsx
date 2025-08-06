import React, { useState } from "react";
import Swal from "sweetalert2";
import 'animate.css'; // Optional: for better animations

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show SweetAlert success message
    Swal.fire({
      title: `Thanks, ${formData.name || "Guest"}!`,
      text: "We received your message successfully.",
      icon: 'success',
      timer: 2500,
      showConfirmButton: false,
      background: '#16a34a',
      color: '#fff',
      customClass: {
        popup: 'animate__animated animate__fadeInDown', // Optional animation
        title: 'text-white',
        htmlContainer: 'text-white',
      }
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative">
      {/* Contact Form */}
      <div className="max-w-md w-full p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mx-auto">
        <h2 className="text-2xl font-semibold mb-2 text-white text-center">
          Your Feedback
        </h2>
        <form onSubmit={handleSubmit} className="space-y-1 text-white">
          <div>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full rounded-md bg-white/20 placeholder-white/70 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-md bg-white/20 placeholder-white/70 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <textarea
              name="message"
              id="message"
              rows="2"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="w-full rounded-md bg-white/20 placeholder-white/70 text-white px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-2 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
