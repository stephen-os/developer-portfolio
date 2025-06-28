import React from 'react';
import Link from 'next/link';
import { Project } from '@/lib/get-projects';
import ProjectCard from './project-card';
import TypewriterSwitch from '@/components/typewriter-switch';

type Props = {
    projects: Project[];
};

const ProjectsIndex = ({ projects }: Props) => {
    return (
        <section className="max-w-screen-xl mx-auto px-4 py-10 space-y-12">
            {/* Header Section */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-white">
                    <TypewriterSwitch
                        texts={["My Projects", "What I've Built", "My Creations", "Portfolio"]}
                        typingSpeed={100}
                        deletingSpeed={50}
                        delayBetween={2000}
                    />
                </h1>
                <div className="text-xl text-stone-300 max-w-4xl mx-auto">
                    A collection of projects showcasing my journey in <span className="text-orange-500 font-semibold">software development</span>
                </div>
                <p className="text-stone-400 text-lg max-w-3xl mx-auto">
                    From graphics programming to full-stack applications, these projects represent my passion for
                    creating innovative solutions and exploring new technologies.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="space-y-8">
                {projects.map((project, i) => (
                    <ProjectCard key={project.slug} project={project} index={i} />
                ))}
            </div>

            {/* Footer Call to Action */}
            <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-semibold text-white mb-4">Interested in My Work?</h2>
                <p className="text-stone-400 mb-6">
                    These projects represent just a glimpse of what I&apos;m passionate about.
                    I&apos;m always working on something new and would love to discuss potential collaborations.
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href={`https://github.com/${process.env.GITHUB_USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full transition-colors"
                    >
                        View All on GitHub
                    </a>
                    <Link
                        href="/contact"
                        className="border border-stone-500 text-stone-300 hover:text-white hover:border-stone-300 font-medium px-6 py-3 rounded-full transition-colors"
                    >
                        Get In Touch
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectsIndex;