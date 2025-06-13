// components/pages/projects/index.tsx
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image'; // ✅ Import Image
import { Project } from '@/lib/get-projects';

type Props = {
    projects: Project[];
};

const ProjectsIndex = ({ projects }: Props) => {
    return (
        <section className="max-w-screen-lg mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center text-white mb-10">Projects</h1>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-neutral-800 rounded-xl p-6 shadow-md"
                    >
                        <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-white mb-2">{project.title}</h2>
                        <p className="text-stone-400 mb-4">{project.description}</p>
                        <Link href={`/projects/${project.slug}`}>
                            <span className="text-orange-400 hover:underline">Read More →</span>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsIndex;