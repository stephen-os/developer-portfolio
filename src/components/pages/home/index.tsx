import Image from 'next/image';

import TypewriterSwitch from '@/components/typewriter-switch';
import { GitHubStatistics } from '@/components/github-stats';
import { LeetCodeStatistics } from '@/components/leetcode-stats';

import profilePic from '@/assets/profile_pic.jpg';
import { motion } from 'framer-motion';

const HomeIndex = () => {
    return (
        <section>
            <section className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 pl-8 pr-8">
                {/* Left: Intro */}
                <section className="flex flex-col md:flex-row text-center md:text-left">
                    <div className="space-y-6">
                        <h1 className='text-2xl md:text-4xl font-bold'>
                            <TypewriterSwitch texts={["Stephen Watson", "Software Engineer"]} />
                        </h1>
                        <p className="text-stone-400 text-base md:text-lg max-w-sm md:max-w-md mx-auto md:mx-0">
                            I&rsquo;m a software engineer passionate about building graphics tools, full-stack systems, and exploring low-level design.
                        </p>
                    </div>
                </section>

                <section className="flex-1"></section>

                {/* Right: Profile Picture */}
                <section className="flex justify-center md:justify-end">
                    <Image
                        src={profilePic}
                        alt="Profile"
                        width={288}
                        height={288}
                        className="rounded-full object-cover shadow-xl border-1 border-white"
                    />
                </section>
            </section>

            {/* GitHub Stats Bar */}
            <motion.div
                className="mt-16 md:mt-24 max-w-screen-lg mx-auto px-8"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <GitHubStatistics />
            </motion.div>

            {/* LeetCode Contribution History */}
            <motion.div
                className="mt-16 md:mt-24 max-w-screen-lg mx-auto px-8"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <LeetCodeStatistics />
            </motion.div>
        </section>
    );
};

export default HomeIndex;