import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const fullName = "{Ranjana}";
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, index + 1));
      index++;
      if (index === fullName.length) clearInterval(interval);
    }, 150); // typing speed (ms)
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="flex items-center justify-start text-left min-h-[85vh] w-full max-w-full px-12"
    >
      <div className="flex flex-col items-start">
        <h2 className="text-8xl font-extrabold mb-8 text-indigo-700 drop-shadow-lg leading-tight">
          Hi, I'm{" "}
          <span className="relative inline-block text-[9rem] font-extrabold">
            {/* Faded background text */}
            <span
              className="absolute top-0 left-0 w-full h-full select-none pointer-events-none"
              style={{
                color: "rgba(22, 160, 133, 0.2)", // faded teal color
                userSelect: "none",
                zIndex: 0,
              }}
            >
              {fullName}
            </span>
            {/* Typed text on top */}
            <span
              style={{
                color: "rgb(22, 160, 133)", // full teal color
                position: "relative",
                zIndex: 1,
                whiteSpace: "nowrap",
                borderRight: "4px solid rgb(22, 160, 133)",
                animation:
                  typedName.length === fullName.length
                    ? "blink 1s step-end infinite"
                    : "none",
              }}
            >
              {typedName}
            </span>
          </span>
        </h2>
        <p className="text-gray-700 max-w-4xl mb-12 text-2xl font-semibold tracking-wide leading-relaxed">
          Backend Developer | NestJS • PostgreSQL • AWS • Microservices • CI/CD
        </p>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="
    bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500
    text-white font-bold py-4 px-14 rounded-full
    shadow-lg shadow-purple-400/50
    transition transform
    hover:scale-110 hover:shadow-xl
    active:scale-95
    animate-pulse
    cursor-pointer
    select-none
  "
          aria-label="Explore My Projects"
        >
          Explore My Projects 🚀
        </a>

        <style>{`
          @keyframes blink {
            0%, 100% {
              border-color: transparent;
            }
            50% {
              border-color: rgb(22, 160, 133);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
