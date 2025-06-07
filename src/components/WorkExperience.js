import React from "react";
import Experience from "./Experience";
import { apexcolors } from "../themes/apexcolors";

export default function WorkExperience() {
  return (
    <div className="grid md:grid-cols-2 gap-12 text-gray-700 mt-12 max-w-7xl mx-auto px-4">
      <Experience
        color={apexcolors[0]}
        title="Shaurya Software Private Limited — Jr. Software Engineer"
        time="Aug 2024 – Present, Zirakpur, Punjab"
        items={[
          "Played a key role in developing the school ERP system from the ground up, contributing to 9 core modules.",
          "Led optimizations and created internal automation scripts to enhance system scalability and reduce manual effort.",
          "Collaborated with cross-functional teams to improve product features and fix critical bugs.",
          "Conducted code reviews and implemented best practices for maintainability and performance.",
          "Tech stack: React.js, Redux, TypeScript, NestJS, PostgreSQL, Microservices architecture, AWS.",
        ]}
        style={{ fontSize: "1.125rem", lineHeight: 1.6 }}
      />
      <Experience
        color={apexcolors[1]}
        title="Internship — Skill Enhanced"
        time="April 2024 – July 2024, Noida"
        items={[
          "Developed an E-learning platform featuring interactive modules and quizzes for enhanced user engagement.",
          "Implemented gamification elements such as badges and leaderboards, boosting active user engagement by 20%.",
          "Worked closely with UI/UX designers to ensure seamless user experience across devices.",
          "Improved backend API performance and security with JWT authentication.",
          "Tech stack: Node.js, React.js, MongoDB, Express.js, REST APIs, JWT, Docker.",
        ]}
        style={{ fontSize: "1.125rem", lineHeight: 1.6 }}
      />
    </div>
  );
}
