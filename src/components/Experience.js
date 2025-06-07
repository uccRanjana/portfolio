import React from "react";

export default function Experience({ color, title, time, items }) {
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
