import React from 'react';
import Link from 'next/link';
import { Projects } from '@/lib/project';
import ProjectCard from './project-card';
import TypewriterSwitch from '@/components/typewriter-switch';

type Props = {
    projects: Projects;
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

            {/* Featured Projects */}
            {projects.featured.length > 0 && (
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
                        <div className="h-0.5 flex-1 bg-gradient-to-r from-orange-500 to-transparent"></div>
                    </div>
                    <div className="space-y-8">
                        {projects.featured.map((project, i) => (
                            <ProjectCard key={project.slug} project={project} index={i} />
                        ))}
                    </div>
                </div>
            )}

            {/* Important Projects */}
            {projects.important.length > 0 && (
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-semibold text-white">Important Projects</h2>
                        <div className="h-0.5 flex-1 bg-gradient-to-r from-stone-400 to-transparent"></div>
                    </div>
                    <div className="space-y-8">
                        {projects.important.map((project, i) => (
                            <ProjectCard key={project.slug} project={project} index={i + projects.featured.length} />
                        ))}
                    </div>
                </div>
            )}

            {/* Standard Projects */}
            {projects.standard.length > 0 && (
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-semibold text-stone-300">Other Projects</h2>
                        <div className="h-0.5 flex-1 bg-gradient-to-r from-stone-600 to-transparent"></div>
                    </div>
                    <div className="space-y-8">
                        {projects.standard.map((project, i) => (
                            <ProjectCard key={project.slug} project={project} index={i + projects.featured.length + projects.important.length} />
                        ))}
                    </div>
                </div>
            )}

            {/* Archive Projects - Only show if there are any */}
            {projects.archive.length > 0 && (
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <h2 className="text-xl font-medium text-stone-400">Archive</h2>
                        <div className="h-0.5 flex-1 bg-gradient-to-r from-stone-700 to-transparent"></div>
                    </div>
                    <div className="space-y-6">
                        {projects.archive.map((project, i) => (
                            <ProjectCard key={project.slug} project={project} index={i + projects.featured.length + projects.important.length + projects.standard.length} />
                        ))}
                    </div>
                </div>
            )}

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