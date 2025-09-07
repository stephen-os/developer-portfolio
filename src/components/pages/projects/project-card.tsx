import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/project';

type Props = {
    project: Project;
    index: number;
};

const ProjectCard = ({ project, index }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="w-full bg-neutral-800 hover:bg-neutral-700 rounded-xl p-6 shadow-md border border-stone-700 transition-colors duration-200"
        >
            <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* Left: Content */}
                <div className="flex-1 space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-3">{project.title}</h2>
                        <p className="text-stone-400 text-base leading-relaxed">{project.description}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex items-center gap-3">
                        <span className="text-stone-500 font-medium">Built with:</span>
                        <div className="flex flex-wrap items-center gap-2">
                            {project.tech.map((tech) => (
                                <div
                                    key={tech}
                                    className="flex items-center gap-1 bg-neutral-900 px-2 py-1 rounded-md"
                                >
                                    <Image
                                        src={`/icons/${tech}.svg`}
                                        alt={tech}
                                        width={20}
                                        height={20}
                                        title={tech}
                                        className="filter brightness-90"
                                    />
                                    <span className="text-stone-300 text-sm capitalize">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 pt-2">
                        <Link
                            href={`/projects/${project.slug}`}
                            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-full transition-colors"
                        >
                            Learn More
                        </Link>

                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-stone-300 border border-stone-500 px-4 py-2 rounded-full hover:text-white hover:border-stone-300 transition-colors"
                            >
                                <Image
                                    src="/icons/github.svg"
                                    alt="GitHub"
                                    width={18}
                                    height={18}
                                />
                                <span className="font-medium">GitHub</span>
                            </a>
                        )}
                    </div>
                </div>

                {/* Right: Project Image */}
                <div className="flex-shrink-0 w-full lg:w-80">
                    <div className="relative group">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={320}
                            height={240}
                            className="rounded-lg object-cover w-full h-60 border border-stone-600 group-hover:border-stone-500 transition-colors"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;