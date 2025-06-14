import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/get-projects';

type Props = {
    project: Project;
    index: number;
};

const iconMap: Record<string, string> = {
    java: 'java',
    cplusplus: 'cplusplus',
    javascript: 'javascript',
    typescript: 'typescript',
    python: 'python',
    react: 'react',
    node: 'node',
    opengl: 'opengl',
};

const ProjectCard = ({ project, index }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="w-full text-left bg-neutral-800 hover:bg-neutral-700 rounded-xl p-6 shadow-md flex flex-col sm:flex-row gap-4 transition-colors duration-200 min-h-[340px]"
        >
            {/* Left: text */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">{project.title}</h2>

                    <div className="flex items-center gap-2 mb-4">
                        <p className="text-xl text-stone-500">Made With:</p>
                        <div className="flex flex-wrap items-center gap-2">
                            {project.tech.map((tech) => (
                                <Image
                                    key={tech}
                                    src={`/icons/${tech}.svg`}
                                    alt={tech}
                                    width={32}
                                    height={32}
                                    title={tech}
                                />
                            ))}
                        </div>
                    </div>

                    <p className="text-stone-400 mb-4">{project.description}</p>
                </div>

                <div className="mt-auto flex items-center gap-4 pt-4">
                    <Link
                        href={`/projects/${project.slug}`}
                        className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
                    >
                        Read More
                    </Link>

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-gray-300 border border-gray-500 px-4 py-2 rounded-full hover:text-white hover:border-gray-200 transition-colors"
                        >
                            <Image
                                src="/icons/github.svg"
                                alt="GitHub"
                                width={18}
                                height={18}
                            />
                            GitHub
                        </a>
                    )}
                </div>
            </div>

            {/* Right: image */}
            <div className="flex items-center justify-center sm:w-72 flex-shrink-0">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={240}
                    height={240}
                    className="rounded-md object-contain max-h-96 w-auto"
                />
            </div>
        </motion.div>
    );
};

export default ProjectCard;
