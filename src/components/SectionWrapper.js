import React from "react";

export default function SectionWrapper({ id, title, children, icon }) {
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
