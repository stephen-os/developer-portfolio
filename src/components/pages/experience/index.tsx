'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TypewriterSwitch from '@/components/typewriter-switch';

interface ExperienceItem {
    title: string;
    company: string;
    timeframe: string;
    description: string;
    type: 'full-time' | 'contract' | 'internship' | 'project';
}

const experiences: ExperienceItem[] = [
    {
        title: 'Government Account Representative',
        company: 'Carahsoft',
        timeframe: 'Spring 2025 - Present',
        type: 'full-time',
        description: 'Technical account representative specializing in Red Hat enterprise solutions for federal government clients. Focus on RHEL, OpenShift, and Ansible implementations, providing technical expertise and solution architecture guidance for government infrastructure modernization initiatives.',
    },
    {
        title: 'Freelance Software Engineer',
        company: 'Independent',
        timeframe: 'Summer 2024 - Present',
        type: 'contract',
        description: 'Focused on expanding expertise in 3D graphics programming and modern web development. Built several graphics projects including Lumina and Tiles while developing custom rendering engines. Simultaneously deepened knowledge of React and Next.js through hands-on web application development.',
    },
    {
        title: 'Software Engineer',
        company: 'University of Virginia',
        timeframe: 'Spring 2024',
        type: 'project',
        description: 'Led development of an interactive web application for exploring the Harrisonburg area. Implemented advanced routing algorithms including solutions to the Traveling Salesman Problem to generate optimal travel itineraries, enhancing user experience through intelligent route planning.',
    },
    {
        title: 'IT Specialist & Data Analyst',
        company: 'Accutech Blades',
        timeframe: 'Summer 2023 – Winter 2023',
        type: 'internship',
        description: 'Streamlined business operations through automation and data management. Developed Python scripts to automate manual data entry processes and created custom email automation systems, significantly reducing processing time and improving operational efficiency.',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        }
    },
};

const getTypeColor = (type: ExperienceItem['type']) => {
    switch (type) {
        case 'full-time':
            return 'bg-green-500/20 text-green-400 border-green-500/30';
        case 'contract':
            return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
        case 'project':
            return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
        case 'internship':
            return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
        default:
            return 'bg-stone-500/20 text-stone-400 border-stone-500/30';
    }
};

const getTypeLabel = (type: ExperienceItem['type']) => {
    switch (type) {
        case 'full-time':
            return 'Full-Time';
        case 'contract':
            return 'Freelance';
        case 'project':
            return 'Project';
        case 'internship':
            return 'Internship';
        default:
            return type;
    }
};

const ExperienceCard = ({ item, index }: { item: ExperienceItem; index: number }) => (
    <motion.div
        variants={cardVariants}
        className="bg-neutral-800 hover:bg-neutral-700 rounded-xl p-6 shadow-md border border-stone-700 transition-colors duration-200"
    >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-orange-500 font-medium">{item.company}</span>
                    <span className="text-stone-500">•</span>
                    <span className="text-stone-400">{item.timeframe}</span>
                </div>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                {getTypeLabel(item.type)}
            </div>
        </div>
        <p className="text-stone-400 leading-relaxed">{item.description}</p>
    </motion.div>
);

const ExperienceIndex = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-4 py-10 space-y-12">
            {/* Header Section */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-white">
                    <TypewriterSwitch
                        texts={["Professional Experience", "Career Journey", "Work History", "My Experience"]}
                        typingSpeed={100}
                        deletingSpeed={50}
                        delayBetween={2000}
                    />
                </h1>
                <div className="text-xl text-stone-300 max-w-4xl mx-auto">
                    Building expertise through diverse roles in <span className="text-orange-500 font-semibold">software development</span> and <span className="text-orange-500 font-semibold">technical solutions</span>
                </div>
                <p className="text-stone-400 text-lg max-w-3xl mx-auto">
                    From government technical consulting to freelance development, my experience spans multiple domains
                    and technologies, always focused on delivering impactful solutions.
                </p>
            </div>

            {/* Experience Timeline */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="space-y-6"
            >
                {experiences.map((item, index) => (
                    <ExperienceCard key={index} item={item} index={index} />
                ))}
            </motion.div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-semibold text-white mb-4">Ready to Work Together?</h2>
                <p className="text-stone-400 mb-6">
                    I'm always open to discussing new opportunities, whether it's full-time positions,
                    consulting projects, or collaborative ventures in technology.
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="/contact"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full transition-colors"
                    >
                        Let's Connect
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-stone-500 text-stone-300 hover:text-white hover:border-stone-300 font-medium px-6 py-3 rounded-full transition-colors"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ExperienceIndex;