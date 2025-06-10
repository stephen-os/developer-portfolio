// components/pages/blogs/index.tsx
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Blog } from '@/lib/get-blogs';

type Props = {
    blogs: Blog[];
};

const BlogIndex = ({ blogs }: Props) => {
    return (
        <section className="max-w-screen-lg mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center text-white mb-10">Blogs</h1>
            <div className="grid md:grid-cols-2 gap-6">
                {blogs.map((blog, i) => (
                    <motion.div
                        key={blog.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-neutral-800 border border-stone-700 rounded-xl p-6 shadow-md"
                    >
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="rounded-md mb-4 w-full h-48 object-cover"
                        />
                        <h2 className="text-xl font-semibold text-white mb-2">{blog.title}</h2>
                        <p className="text-stone-400 mb-4">{blog.description}</p>
                        <Link href={`/blogs/${blog.slug}`}>
                            <span className="text-orange-400 hover:underline">Read More →</span>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default BlogIndex;
