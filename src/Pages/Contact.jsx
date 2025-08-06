import React from "react";
import aboutImage from "../assets/corousel.jpg";
import banner from "../assets/banner.jpg";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import ContactForm from "../Components/ContactForm";

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-200">
            {/* Hero Section */}
            {/* Hero Section with Background Image */}
            <section
                className="relative bg-cover bg-center h-auto py-16 flex items-center justify-center text-center px-4"
                style={{
                    backgroundImage: `url(${banner})`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Text Content */}
                <div className="relative z-10 text-white items-center flex flex-col justify-center text-center">
                    <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md mb-4">
                        Contact Us
                    </h1>
                    <img src={logo} alt="" className="w-24 h-24 rounded-full" />
                    <h2 className="text-4xl md:text-5xl font-bold drop-shadow-md mb-4">
                        THE NW CAREER <br /> <span className="text-3xl">EDUCATION COLLEGE</span>
                    </h2>
                    {/* <Link to="/courses" >
            <button className="text-white font-bold bg-gradient-to-br from-blue-500 to-indigo-600 mb-2 px-4 py-2 rounded-md">Our Courses</button>

          </Link>
          <p className="text-lg md:text-xl mb-4">
            Join us in shaping a brighter future through education.
          </p> */}
                </div>
            </section>


            {/* Main Content */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Image */}
                    <div className="flip-card w-full max-w-md mx-auto h-[300px]">
                        <div className="flip-card-inner">
                            {/* Front Side */}
                            <div className="flip-card-front">
                                <img
                                    src={aboutImage}
                                    alt="About"
                                />
                            </div>

                            {/* Back Side */}
                            <div className="flip-card-back">
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <img src={logo} alt="" className="w-24 h-24 rounded-full " />
                                    <p className="text-gray-700 font-bold text-2xl">
                                        We are a creative team delivering stunning user experiences. Our mission is to craft modern, intuitive digital products.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Text */}
                    <div>
                        <h2 className="px-2 py-6 text-5xl font-bold bg-gradient-to-br from-blue-500 to-indigo-600 bg-clip-text text-transparent">THE NW CAREER EDUCATIONAL COLLAGE</h2>
                        <p className="text-gray-700 font-bold text-xl">
                            We are dedicated to equipping students with the tools they need to succeed in today’s evolving workforce. Our career-focused programs combine academic excellence with hands-on, practical training to ensure that students graduate with both knowledge and real-world skills.
                        </p>





                    </div>
                </div>
            </section>


            {/* our location */}
            <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Google Map - Now on the RIGHT */}
                    <div className="flip-card w-full max-w-md mx-auto h-100">
                        <div className="relative aspect-square bg-cover bg-center py-2 flex-col items-center justify-center text-center px-4 rounded-md  ">
                            <img src={logo} alt="Logo" className="w-24 h-24 rounded-full mb-4 mx-auto" />
                            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md mb-4"> The NW Career 
                            </h1>
                            <p className="text-lg md:text-xl text-white mb-4">Have questions about our programs, admissions, or campus facilities? Our dedicated team is here to help you every step of the way. Whether you're a prospective student, parent, or partner organization, we’re ready to provide the information and support you need.

                             
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="px-2 py- text-5xl font-bold text-white bg-clip-text text-transparent">
                            Contact with Us
                        </h2>

                        <div className="space-y-4 space-x-6 text-gray-700 font-bold text-xl mt-6">
                            <ContactForm />


                        </div>
                    </div>

                </div>
            </section>

            {/* Mission/Vision Section */}
            <section className="bg-gray-200 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flip-card w-full max-w-md mx-auto h-[300px]">
                        <h3 className="text-xl font-semibold text-[#0D92F4] mb-2">
                            🎯 Our Mission
                        </h3>
                        <p className="text-gray-700 font-bold text-2xl">
                            To empower students through quality education and help them build
                            meaningful, successful futures. We aim to cultivate curiosity, creativity,
                            and lifelong learning.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold bg-gradient-to-br from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-2">
                            Our Vision
                        </h3>

                        <p className="text-gray-700 font-bold text-2xl">
                            To be a leading institution recognized globally for excellence in
                            education, innovation, and community impact.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
