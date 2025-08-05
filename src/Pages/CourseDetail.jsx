import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// ✅ Import images at the top using ES6 import syntax
import bartenderImg from '../assets/bartender.jpg';
import digitalImg from '../assets/digital1.jpg';
import realEstateImg from '../assets/realestate1.jpg';
import makeupImg from '../assets/makeup.jpg';
import itImg from '../assets/itcourse.jpg';
import photographyImg from '../assets/photography.jpg';
import eventImg from '../assets/event.jpg';
import guitarImg from '../assets/guitar.jpg';
import receptionistImg from '../assets/receptionist.jpg';
import accountingImg from '../assets/accounting.jpg';
import translatorImg from '../assets/translator.jpg';
import graphicDesignImg from '../assets/graphic.jpg';
import salesImg from '../assets/sales.jpg';
import signLanguageImg from '../assets/sign.jpg';
import securityImg from '../assets/security1.jpg';

// ✅ Course details object
const courseDetails = {
  'bartender-training': {
    title: 'Bartender Training',
    description:
      'Learn the art of mixing drinks, customer service, and bar etiquette. This hands-on course includes crafting cocktails, bar setup, responsible alcohol service, and customer interaction—perfect for aspiring bartenders.',
    image: bartenderImg,
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    description:
      'Master SEO, social media, email campaigns, and Google Analytics. Learn digital strategy, content creation, PPC advertising, and data analysis to thrive in the modern marketing landscape.',
    image: digitalImg,
  },
  'real-estate': {
    title: 'Real Estate',
    description:
      'Gain a strong foundation in real estate laws, property management, and effective client communication. Learn property evaluation, legal documentation, and sales techniques.',
    image: realEstateImg,
  },
  'makeup-artist': {
    title: 'Makeup Artistry',
    description:
      'Learn professional makeup techniques for bridal, fashion, and special events. Includes product knowledge, color theory, hygiene, and client consultations.',
    image: makeupImg,
  },
  'it-course': {
    title: 'IT Course',
    description:
      'Build core IT skills in networking, hardware, software, and troubleshooting. Learn basic coding, system setup, and digital literacy—ideal for tech beginners.',
    image: itImg,
  },
  'photography': {
    title: 'Photography',
    description:
      'Master lighting, composition, and camera settings. Learn manual shooting, photo editing with Lightroom and Photoshop, and build a professional portfolio.',
    image: photographyImg,
  },
  'event-planning': {
    title: 'Event Planning',
    description:
      'Plan weddings, conferences, and corporate events with professionalism. Covers budgeting, logistics, vendor coordination, and on-site management.',
    image: eventImg,
  },
  'guitar-lessons': {
    title: 'Guitar Lessons',
    description:
      'Learn chords, scales, strumming, and popular songs. Covers both acoustic and electric guitar, music theory, and performance techniques for all levels.',
    image: guitarImg,
  },
  'receptionist-training': {
    title: 'Receptionist Training',
    description:
      'Gain the skills needed to become a confident and efficient receptionist. Learn communication, office software, appointment scheduling, and customer service for front-desk roles.',
    image: receptionistImg,
  },
  'basic-accounting': {
    title: 'Basic Accounting',
    description:
      'Learn the fundamentals of accounting, including bookkeeping, ledgers, journal entries, and financial statements. Ideal for beginners and small business owners.',
    image: accountingImg,
  },
  'translator': {
    title: 'Interpreter / Translator',
    description:
      'Develop interpretation and translation skills in professional and real-time settings. Learn language ethics, cultural sensitivity, and technical terminology.',
    image: translatorImg,
  },
  'graphic-design': {
    title: 'Graphic Design',
    description:
      'Learn design principles, typography, branding, and Adobe tools like Photoshop and Illustrator. Create visuals for print, web, and social media.',
    image: graphicDesignImg,
  },
  'sales-training': {
    title: 'Sales Training',
    description:
      'Master effective sales techniques, customer psychology, negotiation, and closing strategies. Ideal for retail, telemarketing, and B2B professionals.',
    image: salesImg,
  },
  'sign-language': {
    title: 'Sign Language',
    description:
      'Learn basic to intermediate sign language for communication with the deaf and hard-of-hearing. Includes everyday vocabulary and conversational practice.',
    image: signLanguageImg,
  },
  'security-guard': {
    title: 'Security Guard Training',
    description:
      'Prepare for a career in security with training in surveillance, access control, emergency response, and legal procedures. Includes physical and situational training.',
    image: securityImg,
  },
};

// ✅ CourseDetail component
const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courseDetails[courseId];

  if (!course) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-red-600">404 - Course Not Found</h2>
        <p className="text-gray-600 mt-4">We couldn't find the course you're looking for.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 px-5 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-80 object-cover rounded-lg shadow-lg mb-8"
      />
     <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600 mb-4">
  {course.title}
</h1>

      <p className="text-gray-700  mb-6 text-2xl">{course.description}</p>
      <button className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-6 py-3 rounded shadow hover:scale-105 transition-transform">
        Enroll Now
      </button>
      <div className="mt-8">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-500 underline hover:text-blue-700"
        >
          ← Back to Courses
        </button>
      </div>
    </div>
  );
};

export default CourseDetail;
