import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative">
      {/* Success Popup */}
      {showPopup && (
        <div className="fixed top-5 right-5 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-out">
          ✅ Thanks for contacting us, {formData.name || "Guest"}!
        </div>
      )}

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

      {/* Popup animation styles */}
      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(-20px); }
          10%, 90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-20px); }
        }
        .animate-fade-in-out {
          animation: fadeInOut 3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
