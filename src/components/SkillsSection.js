import React, { useState, useEffect } from "react";

const skills = [
  {
    name: "JavaScript (ES6+)",
    desc: "Modern JavaScript features including async/await, modules, destructuring, and event-driven programming.",
  },
  {
    name: "TypeScript",
    desc: "Strongly-typed superset of JavaScript to improve code quality and catch errors early.",
  },
  {
    name: "NestJS",
    desc: "Progressive Node.js framework for building efficient, reliable, and scalable server-side applications.",
  },
  {
    name: "Node.js",
    desc: "JavaScript runtime for building fast, scalable network applications and backend APIs.",
  },
  {
    name: "PostgreSQL",
    desc: "Advanced open-source relational database with powerful features and SQL compliance.",
  },
  {
    name: "AWS (EC2, S3, Lambda)",
    desc: "Cloud infrastructure expertise for deploying scalable applications using compute, storage, and serverless services.",
  },
  {
    name: "REST APIs",
    desc: "Designing and implementing RESTful APIs with proper authentication, versioning, and documentation.",
  },
  {
    name: "Microservices",
    desc: "Decomposing applications into small, manageable services for scalability and maintainability.",
  },
  {
    name: "Docker & Kubernetes",
    desc: "Containerization and orchestration tools for deploying and managing applications in distributed environments.",
  },
  {
    name: "Python Automation",
    desc: "Writing Python scripts to automate repetitive tasks and improve workflow efficiency.",
  },
  {
    name: "Git, Github Actions & CI/CD",
    desc: "Version control and automated pipelines for continuous integration and deployment.",
  },
  {
    name: "ReactJs",
    desc: "Building responsive, component-driven frontend interfaces with React and modern state management.",
  },
];

export default function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [activeIndex]);

  return (
    <>
      {/* Blur background when modal open */}
      <div
     
        className={`fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity duration-500 z-30 ${
          activeIndex !== null
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setActiveIndex(null)}
      />

      <section id="skills" className="max-w-6xl mx-auto my-20 px-4 relative z-40">
       <h1 className="text-7xl font-extrabold text-black text-center mb-14 font-serif tracking-wide">
  My Skills
</h1>


        <div
       
          className={`grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-3 transition-filter duration-500 ${
            activeIndex !== null ? "blur-sm" : ""
          }`}
        >
          {skills.map((skill, i) => {
            const isActive = activeIndex === i;
            const rotationDegree = [-3, 2, -2, 3][i % 4];

            return (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`relative bg-pink-50 border-2 border-pink-400 rounded-xl cursor-pointer select-none p-6 shadow-lg transform transition-transform duration-500 ease-in-out ${
                  isActive
                    ? "shadow-2xl z-50"
                    : "hover:scale-105 hover:shadow-xl"
                }`}
                style={{
                  transformOrigin: "center center",
                  transform: `rotate(${rotationDegree}deg) ${
                    isActive ? "scale(1.05)" : "scale(1)"
                  }`,
                  userSelect: "none",
                  willChange: "transform",
                  zIndex: isActive ? 9999 : "auto",
                  minHeight: "150px",
                }}
                title="Click to open note"
              >
                {/* 3D Pin */}
                <div
                  className={`absolute -top-5 right-6 w-8 h-8 flex items-center justify-center transition-transform duration-500 ease-in-out ${
                    isActive ? "animate-pin-pop" : ""
                  }`}
                  style={{ transformOrigin: "bottom center" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#BE185D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 drop-shadow-md"
                  >
                    <ellipse
                      cx="12"
                      cy="6"
                      rx="6"
                      ry="4"
                      fill="#F9A8D4"
                      stroke="#BE185D"
                      strokeWidth="2"
                    />
                    <path d="M12 10 L12 18" stroke="#9D174D" strokeWidth="2" />
                    <path d="M11 18 L13 18 L12 21 Z" fill="#9D174D" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-pink-900 mb-2 select-text break-words">
                  {skill.name}
                </h3>

                {isActive && (
                  <p
                    className="text-pink-800 mt-3 select-text max-w-full"
                    style={{ lineHeight: "1.5rem", wordBreak: "break-word" }}
                  >
                    {skill.desc}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {activeIndex !== null && (
          <div
            className="fixed top-1/2 left-1/2 z-50 max-w-lg w-11/12 sm:w-3/4 md:w-full p-6 md:p-8 bg-pink-100 border-4 border-pink-400 rounded-3xl shadow-2xl transform -translate-x-1/2 -translate-y-1/2 animate-modal-pop"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute -top-8 right-6 sm:right-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#BE185D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-lg"
              >
                <ellipse
                  cx="12"
                  cy="6"
                  rx="6"
                  ry="4"
                  fill="#F9A8D4"
                  stroke="#BE185D"
                  strokeWidth="2"
                />
                <path d="M12 10 L12 18" stroke="#9D174D" strokeWidth="2" />
                <path d="M11 18 L13 18 L12 21 Z" fill="#9D174D" />
              </svg>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 text-pink-900 select-text break-words">
              {skills[activeIndex].name}
            </h3>
            <p
              className="text-pink-800 text-base sm:text-lg select-text"
              style={{ lineHeight: "1.6rem", wordBreak: "break-word" }}
            >
              {skills[activeIndex].desc}
            </p>

            <button
              onClick={() => setActiveIndex(null)}
              className="mt-6 px-6 py-2 rounded-full bg-pink-400 hover:bg-pink-500 text-white font-semibold transition"
            >
              Close
            </button>
          </div>
        )}

        <style>
          {`
          @keyframes pin-pop {
            0% { transform: rotate(0deg) translateY(0) scale(1); }
            50% { transform: rotate(15deg) translateY(-6px) scale(1.1); }
            100% { transform: rotate(0deg) translateY(0) scale(1); }
          }
          .animate-pin-pop {
            animation: pin-pop 0.6s ease forwards;
          }

          @keyframes modal-pop {
            0% {
              opacity: 0;
              transform: translate(-50%, -50%) scale(0.7) rotate(-10deg);
            }
            60% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1.05) rotate(5deg);
            }
            100% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1) rotate(0deg);
            }
          }
          .animate-modal-pop {
            animation: modal-pop 0.4s ease forwards;
          }
        `}
        </style>
      </section>
    </>
  );
}
