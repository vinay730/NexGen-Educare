import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// ✅ Import all course images
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

// ✅ Course details data
const courseDetails = {
  'bartender-training': {
    title: 'Bartender Training',
    description:
      <p><span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600 mt-4 text-3xl'>"Learn the art of mixing drinks,"</span>  customer service, and bar etiquette in this comprehensive Bartender Training Course designed for both beginners and aspiring professionals, <br />  This hands-on program guides you through the core skills required to excel behind the bar. You'll master the essentials of cocktail crafting, bar setup, glassware knowledge, and ingredient pairing, as well as the art of garnishing and presentation to impress customers and elevate drink experiences.</p>,
    image: bartenderImg,
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    description:
      <p><span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600 mt-4 text-3xl'>Gain a comprehensive understanding of digital marketing </span>by mastering SEO, social media management, email campaigns, and Google Analytics. This course also covers content creation, <br/>PPC advertising, and data analysis—equipping you with the skills to design effective digital strategies and grow brands in today’s competitive online landscape. Ideal for aspiring marketers, entrepreneurs, and professionals looking to stay ahead in the digital age.</p>,
    image: digitalImg,
  },
  'real-estate': {
    title: 'Real Estate',
    description:
     <p><span  className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600 mt-4 text-3xl'>Gain a strong foundation in real estate</span> through comprehensive training in property laws, property management, and effective client communication. This course covers property evaluation methods, sales strategies, and essential legal documentation used in residential and commercial transactions. You'll also learn how to navigate negotiations, market properties, and build lasting client relationships. Ideal for aspiring agents, property managers, or anyone looking to enter the dynamic world of real estate with confidence.

</p>,
    image: realEstateImg,
  },
  'makeup-artist': {
    title: 'Makeup Artistry',
    description:
      <p><span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600 mt-4 text-4xl'>"Learn professional makeup techniques </span>for bridal, fashion, and special events in this hands-on Makeup Artistry Course designed for aspiring artists and beauty professionals.<br />

        This course equips you with essential skills in skin preparation, foundation matching, contouring and highlighting, eye makeup techniques, and lip design, with a focus on both classic and modern trends.<br />
        You’ll gain comprehensive product knowledge, understanding different skin types and tones, as well as how to select and use tools such as brushes, sponges, and setting sprays. Learn how to build a professional makeup kit and work with both <span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600 mt-4 text-3xl'>high-end and drugstore brands."</span> </p>,
    image: makeupImg,
  },
  'it-course': {
    title: 'IT Course',
    description:
     <p><span >Develop essential IT skills </span>in this beginner-friendly course covering networking, computer hardware, software installation, and troubleshooting. You'll also gain hands-on experience with basic coding, system configuration, and digital literacy, providing a strong foundation for anyone starting out in tech or aiming to build confidence with everyday technology tools. The course emphasizes real-world problem-solving and introduces key concepts used in both personal and professional tech environments. By the end, you'll be prepared to pursue entry-level IT roles or continue into more advanced technical training.</p>,
    image: itImg,
  },
  'photography': {
    title: 'Photography',
    description:
      <p><span  className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600 mt-4 text-4xl'>Master the fundamentals of photography </span> by learning lighting, composition, and camera settings in both natural and studio environments. This hands-on course teaches you manual shooting techniques, lens selection, and creative framing to elevate your visual storytelling. You'll also gain practical experience with photo editing tools like Adobe Lightroom and Photoshop, enhancing your images with professional-quality results. By the end of the course, you'll build a polished portfolio that showcases your skills and unique artistic style—perfect for aspiring photographers, content creators, or visual artists.</p>,
    image: photographyImg,
  },
  'event-planning': {
    title: 'Event Planning',
    description:
      <p><span  className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600 mt-4 text-4xl'>"Learn to plan and execute</span> weddings, conferences, corporate events, and private functions with confidence and professionalism in this all-inclusive Event Planning Course.<br/>

      This course provides a practical and strategic approach to managing events from start to finish. Whether you're planning an intimate gathering or a large-scale conference, you'll gain the skills and tools needed to deliver exceptional experiences for clients and attendees."</p>,
    image: eventImg,
  },
  'guitar-lessons': {
    title: 'Guitar Lessons',
    description:
     <p><span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600 mt-4 text-4xl'>Learn chords, scales, strumming patterns,</span> and popular songs in this engaging course designed for guitarists of all levels. You'll explore both acoustic and electric guitar techniques while gaining a solid understanding of music theory and rhythm. The course also focuses on ear training, fingerstyle, improvisation, and performance confidence—helping you build a strong musical foundation whether you're a beginner or looking to refine your skills for live or studio settings.</p>,
    image: guitarImg,
  },
  'receptionist-training': {
    title: 'Receptionist Training',
    description:
     <p><span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600 mt-4 text-4xl'>Gain the skills needed to become a confident and efficient Receptionist </span> in professional office environments. This course covers essential communication techniques, customer service etiquette, and phone handling protocols tailored for front-desk roles. You'll also learn to manage appointment scheduling, handle administrative tasks, and navigate common office software like spreadsheets, email systems, and databases. Ideal for those seeking roles in medical offices, corporate settings, or hospitality, this training prepares you to make a strong first impression and keep daily operations running smoothly.</p>,
    image: receptionistImg,
  },
  'basic-accounting': {
    title: 'Basic Accounting',
    description:
     <p><span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600 mt-4 text-4xl'>Learn the fundamentals of accounting </span>in this beginner-friendly course designed for individuals and small business owners. You'll gain practical skills in bookkeeping, journal entries, ledgers, and preparing financial statements like balance sheets and income reports. The course simplifies key concepts such as debits and credits, account reconciliation, and basic tax awareness, giving you the confidence to manage your own finances or support a business with essential accounting tasks.<br/>
     this course provides a solid foundation to confidently manage accounting tasks or pursue further study in finance.</p>,
    image: accountingImg,
  },
  'translator': {
    title: 'Interpreter / Translator',
    description:
      <p><span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600 mt-4 text-4xl'>Develop interpretation and translation skills</span> for both professional and real-time communication settings. This course emphasizes language ethics, cultural sensitivity, and accurate use of technical terminology across various fields. You'll practice listening, comprehension, and conversion techniques that ensure clarity and precision in both written and spoken contexts. Whether you're aiming to work in legal, medical, business, or community environments, this course prepares you to confidently bridge language gaps with professionalism and accuracy.</p>,
    image: translatorImg,
  },
  'graphic-design': {
    title: 'Graphic Design',
    description:
      <p><span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600 mt-4 text-4xl'>Learn core Design Principles,</span> including layout, typography, color theory, and branding, to create visually compelling and impactful content. This course provides hands-on training in industry-standard Adobe tools such as Photoshop and Illustrator, helping you develop the skills to design for both digital and print media. You'll work on real-world projects—from social media graphics and web assets to posters and marketing materials—while building a professional portfolio that reflects your creative identity and technical proficiency.</p>,
    image: graphicDesignImg,
  },
  'sales-training': {
    title: 'Sales Training',
    description:
      <p><span  className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600 mt-4 text-4xl'>Master the art of selling </span>with this practical course focused on effective sales techniques, understanding customer psychology, persuasive communication, and closing strategies. You'll learn how to build rapport, handle objections, and negotiate with confidence—skills essential for success in retail, telemarketing, and B2B environments.<br/> Whether you're new to sales or looking to sharpen your skills, this course offers real-world tools to help you convert leads into loyal customers.</p>,
    image: salesImg,
  },
  'sign-language': {
    title: 'Sign Language',
    description:
      <p><span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600 mt-4 text-4xl'>Learn American Sign Language (ASL) </span>to communicate effectively with the Deaf and hard-of-hearing community. This course covers basic vocabulary, grammar, and cultural aspects of ASL, enabling you to engage in everyday conversations and understand non-verbal cues. You'll practice fingerspelling, numbers, common phrases, and storytelling techniques, building a solid foundation for both personal and professional interactions.<br/> Ideal for beginners or those looking to enhance their communication skills in diverse environments.</p>,
    image: signLanguageImg,
  },
  'security-guard': {
    title: 'Security Guard Training',
    description:
    <p><span className='text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600 mt-4 text-4xl'>Prepare for a career in Security </span>with comprehensive training in surveillance techniques, access control systems, emergency response protocols, and legal responsibilities. This course equips you with both physical and situational readiness, teaching conflict resolution, incident reporting, and effective communication under pressure. Whether you're aiming to work in corporate, residential, or event security, you'll gain the knowledge and confidence needed to handle real-world scenarios professionally and responsibly.</p>,
    image: securityImg,
  },
};

// ✅ CourseDetail Component
const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Enrollment Submitted:', formData);
    alert(`Thank you, ${formData.name}, for enrolling in ${course.title}!`);

    // Reset form
    setFormData({ name: '', email: '', phone: '' });
    setShowForm(false);
  };

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

      <p className="text-gray-700 mb-6 text-2xl">{course.description}</p>

      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-6 py-3 rounded shadow hover:scale-105 transition-transform"
        >
          Enroll Now
        </button>
      ) : (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 rounded-xl shadow-xl">
          <form
            onSubmit={handleSubmit}
            className="mt-6 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl space-y-6 text-white"
          >
            <h2 className="text-4xl font-extrabold bg-gradient-to-br from-blue-500 to-indigo-600 bg-clip-text text-transparent text-center">
              Enrollment Form
            </h2>

            <div>
              <label className="block mb-2 text-lg">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full p-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full p-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="123-456-7890"
                className="w-full p-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <div className="flex space-x-4 pt-2">
              <button
                type="submit"
                className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="text-white underline hover:text-blue-200 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>


      )}

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
