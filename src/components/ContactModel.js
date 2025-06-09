import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import contactmeLogo from "../assets/contactme.jpg";
import nameLogo from "../assets/username-icon.png";
import emailLogo from "../assets/envelope-icon.png";
import callLogo from "../assets/telephone-icon.png";
import instaLogo from "../assets/ig-instagram-icon.png";

export default function ContactModal({ show, onClose }) {
  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-md md:max-w-4xl max-h-screen overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row bg-white"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onClick={(e) => e.stopPropagation()}

          
        >

              <button
    onClick={onClose}
    className="
      absolute top-5
      right-5 md:right-[calc(50%+10px)] 
      text-gray-500 hover:text-gray-800 transition z-50
    "
    aria-label="Close Contact Modal"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-7 h-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
          {/* Left Image */}
          <div className="w-full md:w-1/2 bg-white p-3 md:p-6 flex items-center justify-center">
    <img
      src={contactmeLogo}
      alt="Contact illustration"
      className="w-full max-h-44 md:max-h-[400px] object-contain"
    />
  </div>

  {/* Right Contact Area */}
  <div className="w-full md:w-1/2 p-5 md:p-6 bg-white text-gray-800 relative flex flex-col justify-center">
            {/* Close Button */}
            

            <h2 className="text-2xl md:text-4xl font-extrabold mb-3 text-center text-blue-600">
              Let’s Connect
            </h2>
            <p className="text-center text-blue-400 mb-6 text-sm md:text-base">
              Reach out anytime — I’d love to chat!
            </p>

            <div className="space-y-3">
              {/* Name */}
              <div className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition hover:scale-[1.02]">
                <img src={nameLogo} alt="Name Icon" className="w-5 h-5" />
                <span className="text-sm md:text-base font-medium">Ranjana</span>
              </div>

              {/* Email */}
              <a
                href="mailto:uccranjana13@gmail.com"
                className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition hover:scale-[1.02]"
              >
                <img src={emailLogo} alt="Email Icon" className="w-5 h-5" />
                <span className="text-sm md:text-base font-medium">uccranjana13@gmail.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+917901702159"
                className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition hover:scale-[1.02]"
              >
                <img src={callLogo} alt="Phone Icon" className="w-5 h-5" />
                <span className="text-sm md:text-base font-medium">+91 7901702159</span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/_itx._.ranjana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition hover:scale-[1.02]"
              >
                <img src={instaLogo} alt="Instagram Icon" className="w-5 h-5" />
                <span className="text-sm md:text-base font-medium">@_itx._.ranjana</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
