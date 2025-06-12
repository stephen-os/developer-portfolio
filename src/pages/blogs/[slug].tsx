// pages/blog/[slug].tsx

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

export default function BlogPage({ source, data }: Props) {
    return (
        <Layout>
            <article className="prose prose-invert max-w-3xl mx-auto py-10">
                <h1>{data.title}</h1>
                <p className="text-lg text-gray-400">{data.description}</p>
                <MarkdownRenderer source={source} />
            </article>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { source, data } = await getMdxContent('blogs', params!.slug as string);
    return { props: { source, data } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = getAllSlugs('blogs');
    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
};
