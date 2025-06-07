// ContactModal.js
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { apexcolors } from "../themes/apexcolors";
import contactmeLogo from "../assets/contactme.jpg"
import nameLogo from "../assets/username-icon.png";
import emailLogo from "../assets/envelope-icon.png";
import callLogo from "../assets/telephone-icon.png";
import instaLogo from "../assets/ig-instagram-icon.png";
export default function ContactModel({ show, onClose }) {
    if (!show) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="relative max-w-5xl w-11/12 rounded-3xl shadow-2xl overflow-hidden flex bg-white"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Left Image Area */}
                    <div className="w-1/2 bg-white p-6 flex items-center justify-center">
                        <img
                            src={contactmeLogo} // Replace with your image path
                            alt="Guy holding phone"
                            className="max-h-[420px] w-auto object-contain"
                        />
                    </div>

                    {/* Right Contact Area */}
                    <div className="w-1/2 p-10 bg-white text-gray-800 relative flex flex-col justify-center">
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-5 right-5 text-gray-500 hover:text-gray-800 transition"
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

                        {/* Title */}
                        <h2 className="text-5xl font-extrabold mb-4 text-center text-blue-600">
                            Let’s Connect
                        </h2>
                        <p className="text-center text-blue-400 mb-8 text-lg">
                            Reach out anytime — I’d love to chat!
                        </p>

                        {/* Contact Info Cards */}
                        <div className="space-y-4">
                            {/* Name */}
                            <div className="flex items-center gap-4 bg-blue-50 px-5 py-4 rounded-2xl shadow-sm hover:shadow-lg transition hover:scale-[1.02]">
                                <img src={nameLogo} alt="Name Icon" className="w-6 h-6" />
                                <span className="text-lg font-medium">Ranjana</span>
                            </div>

                            {/* Email */}
                            <a
                                href="mailto:uccranjana13@gmail.com"
                                className="flex items-center gap-4 bg-blue-50 px-5 py-4 rounded-2xl shadow-sm hover:shadow-lg transition hover:scale-[1.02]"
                            >
                                <img src={emailLogo} alt="Email Icon" className="w-6 h-6" />
                                <span className="text-lg font-medium">uccranjana13@gmail.com</span>
                            </a>


                            {/* Phone */}
                            <a
                                href="tel:+911234567890"
                                className="flex items-center gap-4 bg-blue-50 px-5 py-4 rounded-2xl shadow-sm hover:shadow-lg transition hover:scale-[1.02]"
                            >
                                <img src={callLogo} alt="Phone Icon" className="w-6 h-6" />
                                <span className="text-lg font-medium">+91 7901702159</span>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://instagram.com/_itx._.ranjana"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-blue-50 px-5 py-4 rounded-2xl shadow-sm hover:shadow-lg transition hover:scale-[1.02]"
                            >
                                <img src={instaLogo} alt="Instagram Icon" className="w-6 h-6" />
                                <span className="text-lg font-medium">@_itx._.ranjana</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}


