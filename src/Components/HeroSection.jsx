import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import heroImg from "../assets/banner.jpg";
import course1 from "../assets/digital.jpg";
import course2 from "../assets/bartending.jpg";
import course3 from "../assets/makeup.jpg";
import Corousel from "./Corosoul";

const courses = [
  { title: "Digital Marketing Course", img: course1 },
  { title: "Bartending Course", img: course2 },
  { title: "Get more details", img: course3 },
];

const HeroSection = () => {
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
    alert(`Thanks for contacting us, ${formData.name}!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
          <h1
            className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-tight"
            style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)" }}
          >
            We offer all levels of{" "}
            <span className="text-[#77CDFF]">courses to students across the world.</span>{" "}
            We want our students to excel.
          </h1>
        </div>
      </section>

      <main className="flex-1 bg-white">
        {/* Courses Grid */}
        <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mb-10"
            style={{ textShadow: "1px 1px 6px rgba(0, 0, 0, 0.3)" }}
          >
            <span className="text-[#F95454]">Our</span>{" "}
            <span className="px-4 bg-[#77CDFF] text-white">Programs</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((c) => (
              <div
                key={c.title}
                className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-xl text-[#C62E2E]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    🎓 Take the first step towards your future today! Enroll now and unlock endless opportunities.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About / Mission + Form */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mb-10"
              style={{ textShadow: "1px 1px 6px rgba(0, 0, 0, 0.3)" }}
            >
              <span className="bg-[#77CDFF] text-white px-4">Contact</span>{" "}
              <span className="text-[#F95454]">Form</span>
            </h1>

            <div className="flex flex-col lg:flex-row gap-10 items-start justify-center bg-[#0D92F4] p-8 rounded-lg shadow-lg">
              {/* Mission Text */}
              <div className="lg:w-1/2 text-center lg:text-left">
              <h2  className="text-3xl text-white md:text-3xl lg:text-6xl font-bold text-center leading-tight mb-10">General Contact Form</h2>
                <p className=" text-white text-4xl text-center font-bold mb-6">
                Enroll now and let's journey together to success!
                </p>
              </div>

              {/* Feedback Form */}
              <div className="lg:w-1/2">
                <div className="max-w-md w-full p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mx-auto lg:mx-0">
                  <h2 className="text-2xl font-semibold mb-2 text-white text-center">
                    Your Feedback
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-3 text-white">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full rounded-md bg-white/20 placeholder-white/70 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-md bg-white/20 placeholder-white/70 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <textarea
                      name="message"
                      rows="3"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      className="w-full rounded-md bg-white/20 placeholder-white/70 text-white px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>

                    <button
                      type="submit"
                      className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-2 rounded-md"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Campus Facilities */}
        <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mb-10"
              style={{ textShadow: "1px 1px 6px rgba(0, 0, 0, 0.3)" }}
            >
              <span className="bg-[#77CDFF] text-white px-4">Campus Facilities</span>{" "}
             
            </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={course1}
                alt="Campus"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-5xl font-semibold mb-3 text-[#0D92F4]">State of the Art Campus</h3>
              <p className="text-gray-700 mb-4">
                Modern classrooms, dedicated research labs, lush green spaces, and
                student lounges equipped for a seamless learning experience.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Library with digital archives</li>
                <li>Advanced science & engineering labs</li>
                <li>Student center & innovation hubs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Events / Testimonials */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
           <h3 className="text-5xl font-semibold mb-3 ">State of the Art Campus-</h3>
            <div className="space-y-4 flex flex-col md:flex-row md:space-x-4 md:space-y-0 justify-center">

              {/* <div className="bg-white shadow-md rounded-md p-6">
                <h3 className="text-xl font-semibold">Open House Day</h3>
                <p className="text-gray-600">
                  Join us on September 15 to explore our campus and meet faculty.
                </p>
              </div> */}
              <Corousel/>
              <div className="bg-white shadow-md rounded-md p-6">
                <h3 className="text-xl font-semibold">
                  <div className="flex justify-center items-center">
                    <img
                      src={logo}
                      alt="Logo"
                      className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto object-contain"
                    />
                  </div>
                </h3>

                <h2 className="text-[#C62E2E] text-4xl font-bold mt-4  text-center">
                  The NW Career <span className="text-[#0D92F4] text-xl">Education College</span>
                </h2>
                <p className="text-gray-600  text-3xl mt-16">"Education is the passport to the future, for tomorrow belongs to those who prepare for it today."<br/>
— Malcolm X</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HeroSection;
