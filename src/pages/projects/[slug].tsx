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
            <article className="prose prose-invert prose-pre:bg-neutral-900 prose-code:text-orange-300 prose-hr:border-t border-stone-700 max-w-3xl mx-auto py-10 [&_a]:text-[#3B82F6]">
                <h1>{data.title}</h1>
                <p className="text-lg text-gray-400">{data.description}</p>
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
