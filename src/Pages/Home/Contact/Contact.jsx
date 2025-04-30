import { MdAlternateEmail, MdPhone, MdLocationOn, MdEmergency } from "react-icons/md";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  const handleEmergencyClick = () => {
    const subject = "Urgent: Need Assistance";
    const body = "Hello Mizanur,\n\nI need immediate assistance with...";
    window.location.href = `mailto:mizanurrahman.dev70@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Get In Touch</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <MdAlternateEmail className="text-blue-600 text-2xl" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a 
              href="mailto:mizanurrahman.dev70@gmail.com" 
              className="text-blue-600 hover:underline"
            >
              mizanurrahman.dev70@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-green-100 rounded-full">
                <MdPhone className="text-green-600 text-2xl" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <a 
              href="tel:+8801988637609" 
              className="text-gray-700 hover:text-green-600"
            >
              +880 1988 637609
            </a>
          </div>

          {/* Location */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <MdLocationOn className="text-purple-600 text-2xl" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-700">Bakshing, Jamalpur, Mymensingh</p>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-10 text-center">
          <button
            onClick={handleEmergencyClick}
            className="flex items-center justify-center mx-auto gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            <MdEmergency className="text-xl" />
            <span>Send Emergency Email</span>
          </button>
          <p className="text-sm text-gray-500 mt-2">
            For urgent matters only - opens your email client with pre-filled message
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/mizanurrahman70" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <IoLogoGithub className="text-2xl" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/mizanur-rahman70/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              aria-label="LinkedIn"
            >
              <IoLogoLinkedin className="text-2xl" />
            </a>
            
            <a 
              href="https://www.facebook.com/mizanurrahman.dev70/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;