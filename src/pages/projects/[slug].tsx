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
                {/* Project Header */}
                <header className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">{data.title}</h1>
                    {data.description && (
                        <p className="text-xl text-stone-300 mb-6">{data.description}</p>
                    )}
                </header>

                {/* Markdown Content */}
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