import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import WorkExperience from "./WorkExperience";
import photo from "../assets/ranjanaimg.jpg";
import { motion, AnimatePresence } from "framer-motion";
import nestjsLogo from "../assets/nest-js-icon.png";
import nodejsLogo from "../assets/node-js-icon.png";
import pgLogo from "../assets/postgresql-icon.png";
import reactLogo from "../assets/react-js-icon.png";
import tailwindcssLogo from "../assets/tailwind-css-icon.png";
import jsLogo from "../assets/js-icon.png";
import htmlLogo from "../assets/html-icon.png";
import figmaLogo from '../assets/figma-icon.png';
import tsLogo from '../assets/ts-icon.png';
import awsLogo from '../assets/aws-icon.png';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const logos = {
  backend: [
    { name: "NestJS", png: nestjsLogo },
    { name: "NodeJS", png: nodejsLogo },
    { name: "PostgreSQL", png: pgLogo },
    { name: "AWS", png: awsLogo },
    { name: "Typescript", png: tsLogo },
  ],
  frontend: [
    { name: "React", png: reactLogo },
    { name: "Tailwind CSS", png: tailwindcssLogo },
    { name: "JavaScript", png: jsLogo },
    { name: "HTML5", png: htmlLogo },
  ],
  design: [
    { name: "Figma", png: figmaLogo },
  ],
};

const cards = [
  {
    title: "Backend Development",
    preview:
      "I'm a passionate backend engineer with experience in building scalable and fault-tolerant architectures using NestJS, PostgreSQL, and AWS cloud services. I specialize in microservices design, database optimization, and secure API development.",
    logos: logos.backend,
  },
  {
    title: "Frontend Development",
    preview:
      "I have solid experience working with React and MUI components to build clean, responsive user interfaces that offer great user experience. I focus on accessibility, performance, and component-driven development.",
    logos: logos.frontend,
  },
  {
    title: "Design & Prototyping",
    preview:
      "I use Figma for UI/UX designing and prototyping to ensure smooth handoffs between design and development. I create wireframes, mockups, and interactive prototypes that help visualize and iterate the product quickly.",
    logos: logos.design,
  },
];

export default function AboutSection() {
  const [hovered, setHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const logosVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        padding: 20,
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col items-center justify-center px-8"
        style={{ height: "100%", width: "100%", maxWidth: 1400 }}
      >
        <SectionWrapper
          id="about"
          title="About Me"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-14 h-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.75a12.083 12.083 0 01-6.16-10.172L12 14z"
              />
            </svg>
          }
        >
          <div className="flex flex-col md:flex-row gap-20 items-start justify-center text-left w-full max-w-full">
            {/* Left Column: Photo + Resume Button */}
            <div className="flex flex-col items-center gap-4">
              <div
                className="relative group rounded-3xl shadow-2xl cursor-pointer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{ width: 360, height: 360 }}
              >
                <div
                  className="absolute inset-0 rounded-3xl border-4"
                  style={{
                    borderImageSlice: 1,
                    borderWidth: "4px",
                    borderImageSource:
                      "linear-gradient(45deg, #B38CD2, #E49486, #6498D8, #E37A79, #6CBC6A)",
                  }}
                ></div>
                {photo ? (
                  <img
                    src={photo}
                    alt="myimage"
                    className="rounded-3xl w-full h-full object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 rounded-3xl text-gray-400 select-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-16 h-16 mb-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16v1a2 2 0 002 2h14a2 2 0 002-2v-1M4 11l4-4m0 0l4 4m-4-4v12"
                      />
                    </svg>
                  </div>
                )}

                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-900/90 via-indigo-800/70 to-teal-900/80 text-green-400 font-mono text-sm p-4 overflow-hidden select-none transition-opacity duration-500 pointer-events-none ${hovered ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <pre className="whitespace-pre-wrap text-sm">
                    {`// Backend snippet demo
const fetchData = async () => {
  try {
    const res = await fetch('/api/data');
    return await res.json();
  } catch (err) {
    console.error('Error:', err);
  }
};`}
                  </pre>
                  <svg
                    className="absolute top-2 left-2 w-10 h-10 animate-spin-slow opacity-50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <a
                href="/RanjanaResume.pdf"
                download
                className="mt-3 px-6 py-2 border border-indigo-300 text-indigo-600 rounded-full text-base hover:border-pink-300 hover:text-pink-600 transition duration-300"
              >
                📄 Download Resume
              </a>
            </div>

            {/* Right Column: Cards */}
            <div className="flex flex-col max-w-8xl relative mx-auto w-full text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl shadow-lg p-10 border-2 border-indigo-500 bg-white text-gray-900"
                  style={{
                    minWidth: 360,
                    maxWidth: 520,
                    margin: "0 auto",
                    height: 380,             // Fixed height for entire card
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3 className="text-4xl font-extrabold mb-6">{cards[currentIndex].title}</h3>

                  {/* Logos */}
                  <motion.div className="flex gap-6 mb-6 justify-center">
                    {cards[currentIndex].logos.map((logo, i) => (
                      <motion.div
                        key={logo.name}
                        custom={i}
                        variants={logosVariant}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center justify-center"
                        title={logo.name}
                      >
                        <img src={logo.png} alt={logo.name} className="w-14 h-14 object-contain" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Preview text */}
                  <p className="leading-relaxed text-lg">{cards[currentIndex].preview}</p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 max-w-5xl mx-auto px-4">
                <button
                  onClick={prevCard}
                  aria-label="Previous"
                  className="p-2 hover:text-peach-600 focus:outline-none"
                  style={{ background: "none", border: "none", boxShadow: "none" }}
                >
                  <ArrowBackIosNewIcon fontSize="large" />
                </button>

                <button
                  onClick={nextCard}
                  aria-label="Next"
                  className="p-2 hover:text-peach-600 focus:outline-none"
                  style={{ background: "none", border: "none", boxShadow: "none" }}
                >
                  <ArrowForwardIosIcon fontSize="large" />
                </button>
              </div>
            </div>
          </div>

          <WorkExperience />
        </SectionWrapper>
      </motion.div>
    </div>
  );
}
