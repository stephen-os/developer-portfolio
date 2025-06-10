'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface ExperienceItem {
    title: string;
    place: string;
    timeframe: string;
    description: string;
}

const experiences: ExperienceItem[] = [
    {
        title: 'Graphics Engineer Intern',
        place: 'NVIDIA',
        timeframe: 'Summer 2024',
        description: 'Worked on optimizing real-time shader pipelines for next-gen hardware. Built tooling to debug OpenGL/WebGL rendering output across driver versions.',
    },
    {
        title: 'Full Stack Developer',
        place: 'Personal Portfolio',
        timeframe: '2023 – Present',
        description: 'Developed a modern portfolio site using Next.js, Tailwind CSS, and TypeScript. Integrated GitHub and LeetCode data for live skill tracking.',
    },
    {
        title: 'Research Assistant',
        place: 'University Graphics Lab',
        timeframe: '2022 – 2023',
        description: 'Explored real-time global illumination techniques. Built a path tracer in C++ with OpenGL visualization and performance benchmarks.',
    },
    // Add more entries here
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ExperienceCard = ({ item }: { item: ExperienceItem }) => (
    <motion.div
        variants={cardVariants}
        className="bg-neutral-800 border border-stone-700 rounded-xl shadow-md p-6 space-y-2"
    >
        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
        <p className="text-stone-400 italic">{item.place} — {item.timeframe}</p>
        <p className="text-stone-300 text-sm">{item.description}</p>
    </motion.div>
);

const ExperienceIndex = () => {
    return (
        <section className="max-w-screen-lg mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center text-white mb-10">Experience</h1>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col gap-6"
            >
                {experiences.map((item, index) => (
                    <ExperienceCard key={index} item={item} />
                ))}
            </motion.div>
        </section>
    );
};

export default ExperienceIndex;
