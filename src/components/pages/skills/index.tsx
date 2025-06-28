'use client';

import React from 'react';
import TypewriterSwitch from '@/components/typewriter-switch';
import SkillCard from './skill-card';

type Skill = {
    name: string;
    icon?: string;
    years?: number;
};

type SkillCategory = {
    title: string;
    skills: Skill[];
    description: string;
};

const skillCategories: SkillCategory[] = [
    {
        title: "Backend",
        description: "Server-side technologies and databases I work with",
        skills: [
            { name: 'C++', icon: 'cplusplus', years: 5 },
            { name: 'C', icon: 'c', years: 4 },
            { name: 'Java', icon: 'java', years: 5 },
            { name: 'Node.js', icon: 'node', years: 2 },
            { name: 'Python', icon: 'python', years: 2 },
            { name: 'Rust', icon: 'rust', years: 2 },
            { name: 'PostgreSQL', icon: 'postgresql', years: 0.5 },
            { name: 'Spring Boot', icon: 'springboot', years: 0.5 },
        ]
    },
    {
        title: "Frontend",
        description: "Client-side frameworks and technologies",
        skills: [
            { name: 'React', icon: 'react', years: 2 },
            { name: 'Next.js', icon: 'nextjs', years: 0.5 },
            { name: 'TypeScript', icon: 'typescript', years: 2 },
            { name: 'JavaScript', icon: 'javascript', years: 2 },
            { name: 'Tailwind CSS', icon: 'tailwind', years: 1 },
            { name: 'WebGL', icon: 'webgl', years: 0.5 },
            { name: 'Three.js', icon: 'threejs', years: 0.5 },
        ]
    },
    {
        title: "DevOps",
        description: "Infrastructure and deployment tools",
        skills: [
            { name: 'Linux', icon: 'linux', years: 3 },
            { name: 'Docker', icon: 'docker', years: 0.5 },
            { name: 'OpenShift', icon: 'openshift', years: 0.5 },
            { name: 'RHEL', icon: 'redhat', years: 0.5 },
            { name: 'Ansible', icon: 'ansible', years: 0.5 },
        ]
    },
    /*
    {
        title: "Practices",
        description: "Development methodologies and practices",
        skills: [
            { name: 'Test-Driven Development' },
            { name: 'Agile/Scrum' },
            { name: 'Code Review' },
            { name: 'CI/CD', icon: 'cicd' },
            { name: 'API Design' },
            { name: 'Database Design' },
            { name: 'Performance Optimization' },
        ]
    },
    */
    {
        title: "Tools",
        description: "Development tools and environments",
        skills: [
            { name: 'VS Code', icon: 'vscode', years: 5 },
            { name: 'Git', icon: 'git', years: 4 },
            { name: 'Vite', icon: 'vite', years: 2 },
            { name: 'Postman', icon: 'postman', years: 1 },
        ]
    }
];

const SkillsIndex = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-4 py-10 space-y-12">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-white">
                    Skills & Expertise
                </h1>
                <div className="text-stone-300">
                    I&apos;m a <span className="text-orange-500">
                        <TypewriterSwitch
                            texts={[
                                "Full-Stack Developer",
                                "Graphics Programmer",
                                "Systems Engineer",
                                "Problem Solver"
                            ]}
                        />
                    </span>
                </div>
                <p className="text-stone-400 text-lg max-w-4xl mx-auto">
                    I specialize in graphics programming, full-stack development, and systems engineering.
                    I work with modern technologies across the entire development stack, from low-level
                    systems programming to responsive web applications.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <SkillCard key={category.title} category={category} index={index} />
                ))}
            </div>

            <div className="bg-neutral-800 rounded-xl p-6 border border-stone-700">
                <h2 className="text-2xl font-semibold text-white mb-4">What I Love Working With</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-stone-400">
                    <div>
                        <h3 className="text-lg font-medium text-white mb-2">Languages</h3>
                        <p className="text-sm">
                            TypeScript for type safety, C++ for performance-critical applications,
                            and Rust for its memory safety and modern approach to systems programming.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-white mb-2">Frameworks</h3>
                        <p className="text-sm">
                            React and Next.js for powerful frontend experiences, Node.js for scalable
                            backend services, and modern tools that enhance developer productivity.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-white mb-2">Philosophy</h3>
                        <p className="text-sm">
                            I believe in writing clean, maintainable code, continuous learning,
                            and leveraging the right tool for each specific problem.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsIndex;