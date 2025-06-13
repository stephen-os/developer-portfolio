import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
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
};

const ProjectCard = ({ project, index }: Props) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/projects/${project.slug}`);
    };

    return (
        <motion.button
            onClick={handleClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="w-full text-left bg-neutral-800 hover:bg-neutral-700 rounded-xl p-6 shadow-md flex flex-col sm:flex-row gap-4 transition-colors duration-200"
        >
            {/* Left: text */}
            <div className="flex-1">
                <h2 className="text-xl font-semibold text-white mb-2">{project.title}</h2>
                <p className="text-stone-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => {
                        const iconName = iconMap[tech.toLowerCase()];
                        return iconName ? (
                            <Image
                                key={tech}
                                src={`/icons/${iconName}.svg`}
                                alt={tech}
                                width={24}
                                height={24}
                                title={tech}
                            />
                        ) : null;
                    })}
                </div>
            </div>

            {/* Right: image */}
            <div className="relative w-full sm:w-40 h-40 flex-shrink-0 rounded-md overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
        </motion.button>
    );
};

export default ProjectCard;
