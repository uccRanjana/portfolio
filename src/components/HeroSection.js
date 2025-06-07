import React from "react";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-start text-left min-h-[85vh] w-full max-w-full px-12">
      <div className="flex flex-col items-start">
        <h2 className="text-8xl font-extrabold mb-8 text-indigo-700 drop-shadow-lg leading-tight">
          Hi, I'm{" "}
          <span className="text-teal-600 text-[9rem] font-extrabold">{'{'}Ranjana{'}'}</span>
        </h2>
        <p className="text-gray-700 max-w-4xl mb-12 text-2xl font-semibold tracking-wide leading-relaxed">
          Backend Developer | NestJS • PostgreSQL • AWS • Microservices • CI/CD
        </p>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-12 rounded-full shadow-lg transition transform hover:scale-105"
        >
          See My Work
        </a>
      </div>
    </section>
  );
}
