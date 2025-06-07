import React, { useState } from "react";
import Apidemo from "./Apidemo";
import photo from "../assets/ranjanaimg.jpg"
const apexColors = [
    "#B38CD2", // Purple
    "#E49486", // Light Pink
    "#6498D8", // Sky Blue
    "#E37A79", // Hot Pink
    "#6CBC6A", // Light Blue (greenish)
    "#DEAB6C", // Red (warm gold)
    "#C6A990", // Light Pink / Rose
    "#62C2AA", // Teal
    "#9191E2", // Purple-Blue
    "#51C1E7", // Bright Blue
    "#EABC68", // Yellow-Gold
    "#82C468", // Green
    "#CAAA95", // Soft Brown
    "#43A646", // Slate Blue (greenish)
    "#B6AD72", // Light Olive
    "#CC9B78", // Golden Yellow
    "#C3CB76", // Brown
    "#8CA8CD", // Olive Drab Green
];

export default function Main() {
    const handleNavClick = (e, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-900 flex flex-col">
            <Navbar onNavClick={handleNavClick} />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
            <Apidemo />
            <Footer />
        </div>
    );
}

function Navbar({ onNavClick }) {
    return (
        <nav className="sticky top-0 z-50 flex justify-between items-center bg-white shadow-md px-10 py-5 border-b border-gray-200">
            <h1 className="text-3xl font-extrabold text-indigo-700 tracking-tight">
                Ranjana.dev
            </h1>
            <ul className="flex gap-10 font-semibold text-indigo-600">
                {[
                    { label: "About", id: "about" },
                    { label: "Projects", id: "projects" },
                    { label: "Contact", id: "contact" },
                ].map(({ label, id }) => (
                    <li key={id}>
                        <a
                            href={`#${id}`}
                            onClick={(e) => onNavClick(e, id)}
                            className="hover:text-indigo-900 transition"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-28 px-4 max-w-4xl mx-auto">
            <h2 className="text-5xl font-extrabold mb-4 text-indigo-700 drop-shadow-md">
                Hi, I'm <span className="text-teal-600">Ranjana</span>
            </h2>
            <p className="text-gray-700 max-w-xl mb-8 text-lg font-medium">
                Backend Developer | NestJS • PostgreSQL • AWS • Microservices
            </p>
            <a
                href="#projects"
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-10 rounded-full shadow-lg transition"
            >
                See My Work
            </a>
        </section>
    );
}

function SectionWrapper({ id, title, children, icon }) {
    return (
        <section
            id={id}
            className="max-w-6xl mx-auto my-16 px-6 py-10 bg-white rounded-3xl shadow-lg border border-gray-200"
        >
            <h3 className="text-4xl font-extrabold mb-8 flex items-center gap-3 text-indigo-700">
                {icon && <span className="text-indigo-400">{icon}</span>}
                {title}
            </h3>
            {children}
        </section>
    );
}

function AboutSection() {
    // Image upload & preview
    // const [photo, setPhoto] = useState(null);
    const [hovered, setHovered] = useState(false);

    // const onPhotoChange = (e) => {
    //     if (e.target.files && e.target.files[0]) {
    //         setPhoto(URL.createObjectURL(e.target.files[0]));
    //     }
    // };

    return (
        <SectionWrapper
            id="about"
            title="About Me"
            icon={
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.75a12.083 12.083 0 01-6.16-10.172L12 14z"
                    />
                </svg>
            }
        >
            <div className="flex flex-col md:flex-row gap-14 items-center">
                <div
                    className="relative group rounded-3xl shadow-2xl cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={{ width: 260, height: 260 }}
                >
                    {/* Outer glowing border */}
                    <div
                        className="absolute inset-0 rounded-3xl border-4"
                        style={{
                            borderImageSlice: 1,
                            borderWidth: "4px",
                            borderImageSource:
                                "linear-gradient(45deg, #B38CD2, #E49486, #6498D8, #E37A79, #6CBC6A)",
                        }}
                    ></div>

                    {/* The photo or placeholder */}
                    {photo ? (
                        <img
                            src={photo}
                            alt="Img"
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
                            <p className="text-lg">Upload Your Photo</p>
                        </div>
                    )}

                    {/* Hidden file input */}
                    {/* <input
                        type="file"
                        accept="image/*"
                        // onChange={onPhotoChange}
                        className="absolute inset-0 opacity-0 cursor-pointer rounded-3xl"
                    /> */}

                    {/* Technical overlay with code snippet on hover */}
                    <div
                        className={`absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-900/90 via-indigo-800/70 to-teal-900/80 text-green-400 font-mono text-xs p-3 overflow-hidden select-none transition-opacity duration-500 pointer-events-none ${hovered ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <pre className="whitespace-pre-wrap">
                            {`// Backend snippet demo
const fetchData = async () => {
  try {
    const res = await fetch('/api/data');
    return await res.json();
  } catch (err) {
    console.error('Error:', err);
  }
};
`}
                        </pre>
                        {/* Animated brackets around photo */}
                        <svg
                            className="absolute top-2 left-2 w-8 h-8 animate-spin-slow opacity-50"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                <div className="max-w-xl text-gray-800 leading-relaxed text-lg font-medium">
                    <p>
                        I'm a passionate backend engineer with experience building scalable
                        architectures using NestJS, PostgreSQL, AWS, and microservices.
                        Currently building a school management platform for 2M+ users.
                    </p>
                    <p className="mt-4">
                        I also work with Python for automation tasks, scripting, and backend
                        microservices. I love optimizing backend performance and building
                        reliable APIs.
                    </p>
                </div>
            </div>

            <WorkExperience />
        </SectionWrapper>
    );
}

function WorkExperience() {
    return (
        <div className="grid md:grid-cols-2 gap-10 text-gray-700 mt-10">
            <Experience
                color={apexColors[0]}
                title="Shaurya Software Private Limited — Jr. Software Engineer"
                time="Aug 2024 – Present, Zirakpur, Punjab"
                items={[
                    "Played a key role in developing the JusKlik school ERP system from the ground up, contributing to 9 modules.",
                    "Led optimizations and internal automation scripts to enhance scalability.",
                    "Tech: React.js, Redux, TypeScript, NestJS, PostgreSQL, Microservices.",
                ]}
            />
            <Experience
                color={apexColors[1]}
                title="Internship — Skill Enhanced"
                time="April 2024 – July 2024, Noida"
                items={[
                    "Built an E-learning platform with interactive modules and quizzes.",
                    "Added gamification elements, increasing active users by 20%.",
                    "Tech: Node.js, React.js, MongoDB, Express.js, REST APIs, JWT.",
                ]}
            />
        </div>
    );
}

function Experience({ color, title, time, items }) {
    return (
        <div
            className="p-6 rounded-xl border shadow-lg transition-shadow hover:shadow-2xl"
            style={{
                borderColor: color,
                boxShadow: `0 4px 15px ${color}40`,
            }}
        >
            <h4 className="text-xl font-semibold mb-1" style={{ color }}>
                {title}
            </h4>
            <p className="italic mb-3 text-gray-600">{time}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
                {items.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ProjectsSection() {
    const projects = [
        {
            title: "School Management Platform",
            desc: "Scalable microservices-based platform using NestJS, PostgreSQL, MongoDB, and Java.",
            colorIndex: 2,
        },
        {
            title: "Handwriting to PDF Tool",
            desc: "Python tool to convert scanned handwriting into searchable PDFs using OCR.",
            colorIndex: 3,
        },
        {
            title: "RemoteDesktop-Control",
            desc: "Open-source remote desktop with duplex file-sharing and cross-platform support.",
            colorIndex: 4,
        },
        {
            title: "Secure Share",
            desc: "Secure local network file-sharing system built with Electron.js and Node.js.",
            colorIndex: 5,
        },
        {
            title: "API Rate Limiter",
            desc: "A distributed rate limiter middleware for Node.js microservices.",
            colorIndex: 6,
        },
        {
            title: "Cloud Logger",
            desc: "Centralized cloud logging service with ELK stack integration.",
            colorIndex: 7,
        },
    ];

    return (
        <SectionWrapper
            id="projects"
            title="Projects"
            icon={
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 17v-6a2 2 0 012-2h4"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5" />
                </svg>
            }
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map(({ title, desc, colorIndex }, i) => (
                    <ProjectCard
                        key={i}
                        title={title}
                        desc={desc}
                        color={apexColors[colorIndex]}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
}

function ProjectCard({ title, desc, color }) {
    return (
        <div
            className="p-6 rounded-2xl border shadow-lg cursor-pointer bg-white transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl relative overflow-hidden"
            style={{
                borderColor: color,
                boxShadow: `0 8px 20px ${color}55`,
            }}
            title={`Click to learn more about ${title}`}
            onClick={() => alert(`Navigate to ${title}`)}
        >
            <h4 className="text-2xl font-bold mb-3" style={{ color }}>
                {title}
            </h4>
            <p className="text-gray-700 mb-5">{desc}</p>
            <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md absolute bottom-6 right-6"
                style={{ backgroundColor: color }}
            >
                {title[0]}
            </div>
            {/* subtle glowing ripple on click */}
            <span className="absolute inset-0 rounded-2xl pointer-events-none"></span>
        </div>
    );
}

function ContactSection() {
    return (
        <SectionWrapper
            id="contact"
            title="Let's Connect"
            icon={
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 12v4a4 4 0 01-8 0v-4"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16v-4m0 0V8m0 4l-4-4m8 0l-4 4"
                    />
                </svg>
            }
        >
            <p className="mb-6 text-gray-800 font-medium">
                I’m open to freelance work, collaborations, or just talking tech!
            </p>
            <a
                href="mailto:your.email@example.com"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-10 rounded-full shadow-lg transition"
            >
                Contact Me
            </a>
        </SectionWrapper>
    );
}

function Footer() {
    return (
        <footer className="text-center py-6 bg-gray-50 text-gray-400 text-sm font-light border-t border-gray-200">
            © 2025 Ranjana. Built with ❤️ using React & Tailwind CSS.
        </footer>
    );
}
