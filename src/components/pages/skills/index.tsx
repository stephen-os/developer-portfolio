'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type Skill = {
    name: string;
    years: number;
};

const languages: Skill[] = [
    { name: 'C++', years: 5 },
    { name: 'JavaScript', years: 5 },
    { name: 'TypeScript', years: 4 },
    { name: 'Rust', years: 2 },
    { name: 'Python', years: 3 },
];

const frameworks: Skill[] = [
    { name: 'React', years: 4 },
    { name: 'Next.js', years: 2 },
    { name: 'Node.js', years: 4 },
    { name: 'Express', years: 3 },
];

const tools: Skill[] = [
    { name: 'Git', years: 5 },
    { name: 'Docker', years: 3 },
    { name: 'Webpack', years: 2 },
    { name: 'VS Code', years: 5 },
];

const SkillsSection = ({ title, data }: { title: string; data: Skill[] }) => (
    <div className="bg-neutral-800 rounded-xl shadow-md p-6 border border-stone-700 w-full">
        <h2 className="text-2xl font-semibold mb-4 text-white">{title}</h2>
        <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data} layout="vertical">
                <XAxis type="number" domain={[0, 6]} stroke="#ccc" />
                <YAxis dataKey="name" type="category" width={100} stroke="#ccc" />
                <Tooltip />
                <Bar dataKey="years" fill="#ea580c" radius={[0, 10, 10, 0]} />
            </BarChart>
        </ResponsiveContainer>
    </div>
);

const SkillsIndex = () => {
    return (
        <section className="max-w-screen-lg mx-auto px-4 py-10 space-y-12">
            <h1 className="text-4xl font-bold text-center text-white">Skills</h1>

            <p className="text-stone-400 text-lg max-w-3xl text-left">
                I specialize in graphics programming, full-stack development, and systems engineering. I work with technologies like React, TypeScript, WebGL, OpenGL, and Node.js. I also have experience with C++, Rust, and low-level system tools.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SkillsSection title="Programming Languages" data={languages} />
                <SkillsSection title="Frameworks & Libraries" data={frameworks} />
                <SkillsSection title="Tools & Environments" data={tools} />
            </div>

            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold text-white">Languages I Enjoy</h2>
                    <p className="text-stone-400 text-left">
                        I enjoy working with TypeScript for its type safety and modern JavaScript features. C++ is a favorite for systems-level programming and performance-critical applications. Rust has been increasingly fun to learn, especially for its memory safety and concurrency model.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-white">Frameworks I Rely On</h2>
                    <p className="text-stone-400 text-left">
                        React has been my go-to for frontend development, especially paired with Next.js for SSR and routing. Node.js and Express handle backend services with speed and flexibility.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-white">Tools I Trust</h2>
                    <p className="text-stone-400 text-left">
                        Git and Docker are essential in my workflow for version control and deployment. I also enjoy customizing my setup in VS Code to streamline development.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SkillsIndex;
