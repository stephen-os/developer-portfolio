import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TypewriterSwitch from '@/components/typewriter-switch';
import { GitHubStatistics } from '@/components/github-stats';
import { LeetCodeStatistics } from '@/components/leetcode-stats';
import profilePic from '@/assets/profile_pic.jpg';

const HomeIndex = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-4 py-10 space-y-16">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
            >
                {/* Left: Introduction */}
                <div className="flex-1 text-center lg:text-left space-y-6">
                    <div className="space-y-4">
                        <h1 className="text-4xl lg:text-5xl font-bold text-white">
                            Hi, I'm{" "}
                            <span className="text-orange-500">
                                <TypewriterSwitch
                                    texts={["Stephen Watson", "a Software Engineer", "a Developer", "a Problem Solver"]}
                                    typingSpeed={100}
                                    deletingSpeed={50}
                                    delayBetween={2000}
                                />
                            </span>
                        </h1>
                        <p className="text-xl text-stone-300 max-w-2xl mx-auto lg:mx-0">
                            Passionate about building <span className="text-orange-500 font-medium">graphics tools</span>,
                            <span className="text-orange-500 font-medium"> full-stack systems</span>, and exploring
                            <span className="text-orange-500 font-medium"> low-level design</span>
                        </p>
                    </div>

                    <p className="text-stone-400 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        I'm a recent Computer Science graduate from James Madison University with a passion for
                        creating innovative solutions. From 3D graphics programming to modern web applications,
                        I love tackling complex technical challenges.
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <Link
                            href="/projects"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-full transition-colors"
                        >
                            View My Work
                        </Link>
                        <Link
                            href="/contact"
                            className="border border-stone-500 text-stone-300 hover:text-white hover:border-stone-300 font-medium px-8 py-3 rounded-full transition-colors"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>

                {/* Right: Profile Picture */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-shrink-0"
                >
                    <div className="relative">
                        <Image
                            src={profilePic}
                            alt="Stephen Watson - Profile Picture"
                            width={300}
                            height={300}
                            className="rounded-full object-cover shadow-2xl"
                            priority
                        />
                    </div>
                </motion.div>
            </motion.div>

            {/* Quick Stats Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
                <div className="bg-neutral-800 rounded-xl p-6 text-center border border-stone-700">
                    <div className="text-2xl font-bold text-orange-500 mb-2">2024</div>
                    <div className="text-stone-400 text-sm">Graduate</div>
                </div>
                <div className="bg-neutral-800 rounded-xl p-6 text-center border border-stone-700">
                    <div className="text-2xl font-bold text-orange-500 mb-2">5+</div>
                    <div className="text-stone-400 text-sm">Languages</div>
                </div>
                <div className="bg-neutral-800 rounded-xl p-6 text-center border border-stone-700">
                    <div className="text-2xl font-bold text-orange-500 mb-2">10+</div>
                    <div className="text-stone-400 text-sm">Projects</div>
                </div>
                <div className="bg-neutral-800 rounded-xl p-6 text-center border border-stone-700">
                    <div className="text-2xl font-bold text-orange-500 mb-2">3D</div>
                    <div className="text-stone-400 text-sm">Graphics</div>
                </div>
            </motion.div>

            {/* Current Focus Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-neutral-800 rounded-xl p-8 border border-stone-700"
            >
                <h2 className="text-2xl font-semibold text-white mb-6 text-center">Currently Working On</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h3 className="text-white font-medium">3D Graphics Projects</h3>
                        <p className="text-stone-400 text-sm">Building Lumina and Tiles rendering engines</p>
                    </div>
                    <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                            </svg>
                        </div>
                        <h3 className="text-white font-medium">Web Development</h3>
                        <p className="text-stone-400 text-sm">Mastering React and Next.js frameworks</p>
                    </div>
                    <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-white font-medium">DevOps Learning</h3>
                        <p className="text-stone-400 text-sm">Exploring Ansible, OpenShift, and RHEL</p>
                    </div>
                </div>
            </motion.div>

            {/* GitHub Statistics */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-4"
            >
                <h2 className="text-2xl font-semibold text-white text-center">Development Activity</h2>
                <GitHubStatistics />
            </motion.div>

            {/* LeetCode Statistics */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="space-y-4"
            >
                <h2 className="text-2xl font-semibent text-white text-center">Problem Solving</h2>
                <LeetCodeStatistics />
            </motion.div>

            {/* Featured Projects Preview */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl p-8 text-center"
            >
                <h2 className="text-2xl font-semibold text-white mb-4">Explore My Work</h2>
                <p className="text-stone-400 mb-6 max-w-2xl mx-auto">
                    From 3D graphics engines to full-stack web applications, discover the projects that showcase
                    my journey as a developer and my passion for creating innovative solutions.
                </p>
                <div className="flex justify-center gap-4">
                    <Link
                        href="/projects"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full transition-colors"
                    >
                        View All Projects
                    </Link>
                    <Link
                        href="/about"
                        className="border border-stone-500 text-stone-300 hover:text-white hover:border-stone-300 font-medium px-6 py-3 rounded-full transition-colors"
                    >
                        Learn More About Me
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default HomeIndex;