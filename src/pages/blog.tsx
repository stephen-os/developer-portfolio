// pages/blogs/index.tsx
import { GetStaticProps } from 'next';
import Layout from '@/pages/layout';
import BlogIndex from '@/components/pages/blogs/index';
import { getAllBlogs, Blog } from '@/lib/get-blogs';

type Props = {
    blogs: Blog[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const blogs = getAllBlogs();

    return {
        props: {
            blogs,
        },
    };
};

export default function Blogs({ blogs }: Props) {
    return (
        <Layout>
            <BlogIndex blogs={blogs} />
        </Layout>
    );
}
