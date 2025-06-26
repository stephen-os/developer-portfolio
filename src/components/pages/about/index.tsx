'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import TypewriterSwitch from "@/components/typewriter-switch";

const AboutSection = ({
    title,
    children,
    imageSrc,
    imageAlt,
    imageLeft = false,
    index
}: {
    title: string;
    children: React.ReactNode;
    imageSrc: string;
    imageAlt: string;
    imageLeft?: boolean;
    index: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-neutral-800 hover:bg-neutral-700 rounded-xl p-6 shadow-md transition-colors duration-200 border border-stone-700"
        >
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${imageLeft ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${imageLeft ? 'lg:col-start-2' : ''}`}>
                    <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
                    <div className="text-stone-400 text-base space-y-4">
                        {children}
                    </div>
                </div>
                <div className={`flex justify-center ${imageLeft ? 'lg:col-start-1' : ''}`}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={400}
                        height={300}
                        className="rounded-xl object-cover w-full max-w-md"
                    />
                </div>
            </div>
        </motion.div>
    );
};

const AboutIndex = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-4 py-10 space-y-12">
            {/* Header Section */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-white">
                    <TypewriterSwitch
                        texts={["About Me", "My Journey", "Who I Am", "My Story"]}
                        typingSpeed={100}
                        deletingSpeed={50}
                        delayBetween={2000}
                    />
                </h1>
                <div className="text-xl text-stone-300 max-w-4xl mx-auto">
                    Hi, I'm <span className="text-orange-500 font-semibold">Stephen</span> — a passionate developer from the Shenandoah Valley
                </div>
            </div>

            {/* Introduction Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-neutral-800 rounded-xl p-8 shadow-md border border-stone-700 text-center"
            >
                <p className="text-stone-400 text-lg leading-relaxed max-w-4xl mx-auto">
                    My name is Stephen, and I'm from a small town called Stuarts Draft in the Shenandoah Valley.
                    I first got into programming in high school when one of my favorite teachers introduced a new course on game development.
                    While the class wasn't very technical, it exposed me to the foundations of programming — and I was hooked.
                </p>
            </motion.div>

            {/* Education Section */}
            <AboutSection
                title="Education"
                imageSrc="/about-me/graduation.jpg"
                imageAlt="Graduation"
                index={1}
            >
                <p>
                    I graduated from <span className="text-white font-medium">James Madison University</span> in May 2024 with a degree in Computer Science,
                    along with minors in Mathematics and History. I was especially drawn to courses in computer graphics
                    and machine learning — subjects that combined technical depth with creativity.
                </p>
                <p>
                    My mathematics minor was essential to my understanding of computer science.
                    Courses like Calculus III, Probability and Statistics, and Linear Algebra gave me the foundation I needed
                    for tackling challenging concepts in computer science. My interest in History comes from a desire to better understand the world;
                    I believe that learning about culture, conflict, and philosophy helps us approach technology with a more thoughtful, human-centered perspective.
                </p>
                <p>
                    During my time at JMU, I completed projects in a variety of languages including Java, C/C++, and Python.
                    Some of my favorite projects included <span className="text-orange-500 font-medium">Counter Cart</span>, a Minecraft-themed racing game built in WebGL and TypeScript,
                    and <span className="text-orange-500 font-medium">KiloBites</span>, a Java-based recipe management tool developed using agile principles.
                </p>
            </AboutSection>

            {/* Rocket Team Section */}
            <AboutSection
                title="Piedmont Student Launch Team"
                imageSrc="/about-me/rocket.jpg"
                imageAlt="Rocket Launch Team"
                imageLeft={true}
                index={2}
            >
                <p>
                    Before transferring to JMU, I studied at Piedmont Virginia Community College, where I joined the
                    <span className="text-white font-medium"> Piedmont Student Launch Team</span>—a NASA-sponsored program challenging students to design, build, and launch a research-based high-powered rocket.
                </p>
                <p>
                    From 2019 to 2021, I focused on designing experimental payloads. One year, I developed a deployable drone system capable of autonomous rendezvous at a predefined location.
                    Another year, I worked on a vision-based landing detection system that estimated touchdown coordinates without relying on GPS—using onboard sensors and environmental pattern recognition.
                </p>
                <p>
                    I designed mechanical components in <span className="text-orange-500 font-medium">Fusion 360</span>, which was my first exposure to 3D modeling and CAD software. This experience also introduced me to working with physical materials—
                    including <span className="text-orange-500 font-medium">woodworking</span>, <span className="text-orange-500 font-medium">fiberglass layups</span>, and <span className="text-orange-500 font-medium">soldering electronics</span>—to build and integrate custom systems into the rocket.
                </p>
                <p>
                    Throughout each year-long project cycle, our team submitted formal technical proposals, collaborated across disciplines, and met engineering review milestones.
                </p>
            </AboutSection>

            {/* CAPWIC Conference Section */}
            <AboutSection
                title="CAPWIC Conference"
                imageSrc="/about-me/capwic.jpg"
                imageAlt="CAPWIC Conference"
                index={3}
            >
                <p>
                    I had the opportunity to attend the <span className="text-white font-medium">Capital Region Celebration of Women in Computing (CAPWIC)</span>,
                    a regional conference that promotes diversity and inclusion in technology.
                </p>
                <p>
                    As part of the event, my team and I presented an app we developed to showcase how algorithmic thinking can solve practical, real-world problems.
                    Our project focused on helping visitors to Harrisonburg build travel itineraries and generate optimized routes based on their selected destinations.
                </p>
                <p>
                    The app tackled the classic <span className="text-orange-500 font-medium">Traveling Salesman Problem (TSP)</span>, and allowed users to experiment with different route-planning algorithms—
                    giving them insight into how various approaches performed on real, dynamic data.
                </p>
                <p>
                    We were thrilled to win <span className="text-orange-500 font-medium">first place</span> in the conference's flash talk competition, earning recognition for both our technical execution and presentation.
                </p>
            </AboutSection>

            {/* Interests Section */}
            <AboutSection
                title="Personal Interests"
                imageSrc="/about-me/festival.jpg"
                imageAlt="Music Festival"
                imageLeft={true}
                index={4}
            >
                <p>
                    I have a strong passion for computer graphics and machine learning, but outside of development, I'm just as drawn to music and the outdoors.
                    I play guitar and love going to concerts whenever I get the chance.
                </p>
                <p>
                    One of my favorite experiences is attending music festivals with friends—camping and enjoying live performances, and being immersed in nature.
                    I also frequently hike the trails near my home, which helps me recharge and stay inspired.
                </p>
                <p>
                    These experiences outside of technology keep me grounded and often provide unexpected inspiration for my work. Whether it's the mathematical patterns in music or the problem-solving required for outdoor adventures, I find that diverse interests make me a better developer.
                </p>
            </AboutSection>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl p-8 text-center"
            >
                <h2 className="text-2xl font-semibold text-white mb-4">Let's Connect</h2>
                <p className="text-stone-400 mb-6">
                    I'm always interested in discussing technology, collaborating on projects, or just having a good conversation about development and innovation.
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

export default AboutIndex;