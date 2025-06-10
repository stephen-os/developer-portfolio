import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
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
            src={`/images/blogs/${props.src}`}
            alt={props.alt}
            width={800}
            height={400}
            className="rounded-lg my-6"
        />
    ),
};

export default function BlogPage({ source, data }: Props) {
    return (
        <Layout>
            <article className="prose prose-invert max-w-3xl mx-auto py-10">
                <h1>{data.title}</h1>
                <p className="text-lg text-gray-400">{data.description}</p>
                <MDXRemote {...source} components={components} />
            </article>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string;
    const filePath = path.join(process.cwd(), 'data', 'blogs', `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(fileContent);
    const mdxSource = await serialize(content);

    return {
        props: {
            source: mdxSource,
            data,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const dir = path.join(process.cwd(), 'data', 'blogs');
    const filenames = fs.readdirSync(dir);
    const paths = filenames.map((file) => ({
        params: {
            slug: file.replace(/\.md$/, ''),
        },
    }));

    return {
        paths,
        fallback: false,
    };
};
