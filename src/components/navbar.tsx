import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import * as FaIcons from "react-icons/fa";

import profilePic from "../assets/profile_pic.jpg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const dropdownAnimations = {
        hidden: {
            y: "-100%",
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
                mass: 1,
            },
        },
        exit: {
            y: "-100%",
            opacity: 0,
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            },
        },
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-neutral-900 h-14 z-30 shadow-md">
            <div className="flex justify-between items-center px-4 h-full">
                {/* Logo */}
                <Image src={profilePic} alt="logo" width={32} height={32} className="rounded-full object-cover z-50" priority />

                {/* Hamburger Menu Icon (Mobile Only) */}
                <div className="md:hidden z-50" onClick={toggleMenu}>
                    {isOpen ? <FaIcons.FaTimes size={24} className="text-orange-400" /> : <FaIcons.FaBars size={24} className="text-stone-400" />}
                </div>

                {/* Desktop Navigation Links (Center) */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-6">
                    <Link href="/"><FaIcons.FaHome className="text-stone-500 hover:text-orange-400" /></Link>
                    <Link href="/about"><FaIcons.FaUser className="text-stone-500 hover:text-orange-400" /></Link>
                    <Link href="/skills"><FaIcons.FaTools className="text-stone-500 hover:text-orange-400" /></Link>
                    <Link href="/experience"><FaIcons.FaBriefcase className="text-stone-500 hover:text-orange-400" /></Link>
                    <Link href="/projects"><FaIcons.FaCode className="text-stone-500 hover:text-orange-400" /></Link>
                    <Link href="/blogs"><FaIcons.FaFolderOpen className="text-stone-500 hover:text-orange-400" /></Link>
                    <Link href="/contact"><FaIcons.FaEnvelope className="text-stone-500 hover:text-orange-400" /></Link>
                </div>

                {/* Desktop Social Icons (Right) */}
                <div className="hidden md:flex space-x-4">
                    <Link href="https://www.linkedin.com/in/stw-dev"><FaIcons.FaLinkedin className="text-stone-500 hover:text-orange-400" /></Link>
                    <Link href="https://github.com/stw-dev"><FaIcons.FaGithub className="text-stone-500 hover:text-orange-400" /></Link>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownAnimations}
                        className="md:hidden fixed inset-0 bg-neutral-900 flex flex-col items-center justify-center space-y-6 z-40"
                    >
                        <Link href="/" onClick={closeMenu}><FaIcons.FaHome className="text-3xl text-stone-500 hover:text-orange-400" /></Link>
                        <Link href="/about" onClick={closeMenu}><FaIcons.FaUser className="text-3xl text-stone-500 hover:text-orange-400" /></Link>
                        <Link href="/skills" onClick={closeMenu}><FaIcons.FaTools className="text-3xl text-stone-500 hover:text-orange-400" /></Link>
                        <Link href="/experience" onClick={closeMenu}><FaIcons.FaBriefcase className="text-3xl text-stone-500 hover:text-orange-400" /></Link>
                        <Link href="/projects" onClick={closeMenu}><FaIcons.FaCode className="text-3xl text-stone-500 hover:text-orange-400" /></Link>
                        <Link href="/blogs" onClick={closeMenu}><FaIcons.FaFolderOpen className="text-3xl text-stone-500 hover:text-orange-400" /></Link>
                        <Link href="/contact" onClick={closeMenu}><FaIcons.FaEnvelope className="text-3xl text-stone-500 hover:text-orange-400" /></Link>

                        <div className="flex space-x-6 pt-4">
                            <Link href="https://www.linkedin.com/in/stw-dev"><FaIcons.FaLinkedin className="text-3xl text-stone-500 hover:text-orange-400" /></Link>
                            <Link href="https://github.com/stw-dev"><FaIcons.FaGithub className="text-3xl text-stone-500 hover:text-orange-400" /></Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    );
};

//export default Navbar;