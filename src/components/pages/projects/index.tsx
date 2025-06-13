import { Project } from '@/lib/get-projects';
import ProjectCard from './project-card';

type Props = {
    projects: Project[];
};

const ProjectsIndex = ({ projects }: Props) => {
    return (
        <section className="max-w-screen-lg mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center text-white mb-10">Projects</h1>
            <div className="grid gap-6">
                {projects.map((project, i) => (
                    <ProjectCard key={project.slug} project={project} index={i} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsIndex;
