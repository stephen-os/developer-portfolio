import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../layout';
import MarkdownRenderer from '@/components/markdown-renderer';
import { getMdxContent, getAllSlugs } from '@/lib/mdx';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

type Props = {
    source: MDXRemoteSerializeResult;
    data: {
        title: string;
        description: string;
        image: string;
    };
};


export default function ProjectPage({ source, data }: Props) {
    return (
        <Layout>
            <article className="w-full max-w-5xl mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold text-white mb-2">{data.title}</h1>
                <p className="text-lg text-gray-400 mb-6">{data.description}</p>
                <MarkdownRenderer source={source} />
            </article>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { source, data } = await getMdxContent('projects', params!.slug as string);
    return { props: { source, data } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = getAllSlugs('projects');
    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
};
