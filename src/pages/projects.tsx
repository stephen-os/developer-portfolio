import { GetStaticProps } from 'next';
import Layout from '@/pages/layout';
import ProjectsIndex from '@/components/pages/projects/index';
import { Projects, ProjectLoader } from '@/lib/project';

type Props = {
    projects: Projects;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const projects = ProjectLoader.getCategorizedProjects();

    return {
        props: {
            projects,
        },
    };
};

export default function ProjectsPage({ projects }: Props) {
    return (
        <Layout>
            <ProjectsIndex projects={projects} />
        </Layout>
    );
}