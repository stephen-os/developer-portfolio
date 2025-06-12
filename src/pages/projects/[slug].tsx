// pages/projects/[slug].tsx

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import Image from 'next/image';
import Layout from '../layout';

type Props = {
    source: MDXRemoteSerializeResult;
    data: {
        title: string;
        description: string;
        image: string;
    };
};

const components = {
    img: (props: any) => (
        <Image
            src={`/images/${props.src}`}
            alt={props.alt}
            width={800}
            height={400}
            className="rounded-lg my-6"
        />
    ),
};

export default function ProjectPage({ source, data }: Props) {
    return (
        <Layout>
            <article
                className="
    prose prose-invert 
    prose-pre:bg-neutral-900 
    prose-code:text-orange-300 
    prose-hr:border-t border-stone-700 
    max-w-3xl mx-auto py-10
    [&_a]:text-[#3B82F6]
  "
            >

                <h1>{data.title}</h1>
                <p className="text-lg text-gray-400">{data.description}</p>

                <div className="bg-neutral-800 border border-orange-500 rounded-2xl shadow-lg px-6 py-4 mt-6 whitespace-pre-wrap">
                    <MDXRemote {...source} components={components} />
                </div>
            </article>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string;
    const filePath = path.join(process.cwd(), 'data', 'projects', `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(fileContent);

    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [rehypeHighlight],
        },
    });

    return {
        props: {
            source: mdxSource,
            data,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const dir = path.join(process.cwd(), 'data', 'projects');
    const filenames = fs.readdirSync(dir);

    const paths = filenames.map((file) => ({
        params: { slug: file.replace(/\.md$/, '') },
    }));

    return {
        paths,
        fallback: false,
    };
};
