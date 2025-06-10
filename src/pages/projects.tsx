// pages/projects/index.tsx
import { GetStaticProps } from 'next';
import Layout from '@/pages/layout';
import ProjectsIndex from '@/components/pages/projects/index';
import { getAllProjects, Project } from '@/lib/get-projects';

type Props = {
    projects: Project[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const projects = getAllProjects();

    return {
        props: {
            projects,
        },
    };
};

export default function Projects({ projects }: Props) {
    return (
        <Layout>
            <ProjectsIndex projects={projects} />
        </Layout>
    );
}
