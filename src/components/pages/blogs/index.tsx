import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TypewriterSwitch from '@/components/typewriter-switch';
import { Blog } from '@/lib/get-blogs';

type Props = {
    blogs: Blog[];
};

const BlogCard = ({ blog, index }: { blog: Blog; index: number }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-neutral-800 hover:bg-neutral-700 border border-stone-700 rounded-xl overflow-hidden shadow-md transition-colors duration-200 group"
        >
            {/* Image Container */}
            <div className="relative w-full h-48 overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>

            {/* Content Container */}
            <div className="p-6 space-y-4">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-white group-hover:text-orange-500 transition-colors">
                        {blog.title}
                    </h2>
                    <p className="text-stone-400 leading-relaxed line-clamp-3">
                        {blog.description}
                    </p>
                </div>

                {/* Metadata */}
                {(blog.date || blog.readTime) && (
                    <div className="flex items-center gap-4 text-sm text-stone-500">
                        {blog.date && (
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {new Date(blog.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                })}
                            </span>
                        )}
                        {blog.readTime && (
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {blog.readTime}
                            </span>
                        )}
                    </div>
                )}

                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {blog.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 text-xs bg-orange-500/20 text-orange-400 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                        {blog.tags.length > 3 && (
                            <span className="px-2 py-1 text-xs bg-stone-700 text-stone-400 rounded-full">
                                +{blog.tags.length - 3} more
                            </span>
                        )}
                    </div>
                )}

                {/* Read More Link */}
                <div className="pt-2">
                    <Link
                        href={`/blogs/${blog.slug}`}
                        className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium transition-colors group/link"
                    >
                        <span>Read Article</span>
                        <svg
                            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </motion.article>
    );
};

const BlogIndex = ({ blogs }: Props) => {
    return (
        <section className="max-w-screen-xl mx-auto px-4 py-10 space-y-12">
            {/* Header Section */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-white">
                    <TypewriterSwitch
                        texts={["My Blog", "Tech Insights", "Development Journey", "Learning Notes"]}
                        typingSpeed={100}
                        deletingSpeed={50}
                        delayBetween={2000}
                    />
                </h1>
                <div className="text-xl text-stone-300 max-w-4xl mx-auto">
                    Thoughts on <span className="text-orange-500 font-semibold">software development</span>,
                    <span className="text-orange-500 font-semibold"> technology trends</span>, and
                    <span className="text-orange-500 font-semibold"> lessons learned</span>
                </div>
                <p className="text-stone-400 text-lg max-w-3xl mx-auto">
                    Sharing insights from my journey in software development, from graphics programming
                    to web development, and everything I discover along the way.
                </p>
            </div>

            {/* Blog Grid */}
            {blogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <BlogCard key={blog.slug} blog={blog} index={index} />
                    ))}
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-neutral-800 rounded-xl p-12 text-center border border-stone-700"
                >
                    <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon!</h2>
                    <p className="text-stone-400 mb-6 max-w-md mx-auto">
                        I&apos;m currently working on some exciting blog posts about graphics programming,
                        web development, and my latest projects. Stay tuned!
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            href="/projects"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full transition-colors"
                        >
                            View My Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="border border-stone-500 text-stone-300 hover:text-white hover:border-stone-300 font-medium px-6 py-3 rounded-full transition-colors"
                        >
                            Get Notified
                        </Link>
                    </div>
                </motion.div>
            )}

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl p-8 text-center"
            >
                <h2 className="text-2xl font-semibold text-white mb-4">Let&apos;s Connect</h2>
                <p className="text-stone-400 mb-6">
                    I&apos;m always interested in discussing technology, collaborating on projects, or just having a good conversation about development and innovation.
                </p>
                <div className="flex justify-center gap-4">
                    <Link
                        href="/contact"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full transition-colors"
                    >
                        Get In Touch
                    </Link>
                    <Link
                        href="/projects"
                        className="border border-stone-500 text-stone-300 hover:text-white hover:border-stone-300 font-medium px-6 py-3 rounded-full transition-colors"
                    >
                        View Projects
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default BlogIndex;