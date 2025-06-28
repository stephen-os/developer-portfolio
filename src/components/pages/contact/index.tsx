'use client';

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import TypewriterSwitch from '@/components/typewriter-switch';
import emailjs from '@emailjs/browser';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormStatus {
    type: 'success' | 'error' | 'loading' | null;
    message: string;
}

const ContactIndex = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<FormStatus>({ type: null, message: '' });

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }, []);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({
                type: 'error',
                message: 'Please fill in all required fields.'
            });
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({
                type: 'error',
                message: 'Please enter a valid email address.'
            });
            return;
        }

        setStatus({ type: 'loading', message: 'Sending message...' });

        try {
            // EmailJS configuration
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

            // Template parameters for EmailJS
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject || 'Contact Form Submission',
                message: formData.message,
                to_name: 'Stephen Watson',
                reply_to: formData.email,
            };

            const response = await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            if (response.status === 200) {
                setStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully. I&apos;ll get back to you within 24-48 hours.'
                });
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or contact me directly via email.'
            });
        }
    }, [formData]);

    return (
        <section className="max-w-screen-xl mx-auto px-4 py-10 space-y-12">
            {/* Header Section */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-white">
                    <TypewriterSwitch
                        texts={["Get In Touch", "Contact Me", "Let's Connect", "Start a Conversation"]}
                        typingSpeed={100}
                        deletingSpeed={50}
                        delayBetween={2000}
                    />
                </h1>
                <div className="text-xl text-stone-300 max-w-4xl mx-auto">
                    Ready to collaborate on something <span className="text-orange-500 font-semibold">amazing</span>?
                </div>
                <p className="text-stone-400 text-lg max-w-3xl mx-auto">
                    Whether you want to discuss a project, collaborate on something creative, explore new opportunities,
                    or just chat about graphics programming and development, I&apos;d love to hear from you.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Info Cards */}
                <div className="lg:col-span-1 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-neutral-800 rounded-xl p-6 border border-stone-700"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Email</h3>
                                <p className="text-stone-400 text-sm">Drop me a line anytime</p>
                            </div>
                        </div>
                        <a
                            href="mailto:ImStephenTylerWatson@gmail.com"
                            className="text-orange-500 hover:text-orange-400 transition-colors"
                        >
                            ImStephenTylerWatson@gmail.com
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-neutral-800 rounded-xl p-6 border border-stone-700"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Location</h3>
                                <p className="text-stone-400 text-sm">Where I&apos;m based</p>
                            </div>
                        </div>
                        <p className="text-stone-300">Waynesboro, Virginia, US</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-neutral-800 rounded-xl p-6 border border-stone-700"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Response Time</h3>
                                <p className="text-stone-400 text-sm">I&apos;ll get back to you</p>
                            </div>
                        </div>
                        <p className="text-stone-300">Within 24-48 hours</p>
                    </motion.div>
                </div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="lg:col-span-2"
                >
                    <form onSubmit={handleSubmit} className="bg-neutral-800 border border-stone-700 p-8 rounded-xl shadow-lg space-y-6">
                        <h2 className="text-2xl font-semibold text-white mb-6">Send me a message</h2>

                        {/* Status Message */}
                        {status.type && (
                            <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-500/20 border border-green-500/30 text-green-400' :
                                status.type === 'error' ? 'bg-red-500/20 border border-red-500/30 text-red-400' :
                                    'bg-orange-500/20 border border-orange-500/30 text-orange-400'
                                }`}>
                                {status.message}
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                <label className="text-stone-300 mb-2 font-medium" htmlFor="name">
                                    Name <span className="text-red-400">*</span>
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    className="bg-neutral-900 border border-stone-600 p-3 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-stone-300 mb-2 font-medium" htmlFor="email">
                                    Email <span className="text-red-400">*</span>
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className="bg-neutral-900 border border-stone-600 p-3 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-stone-300 mb-2 font-medium" htmlFor="subject">
                                Subject
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="bg-neutral-900 border border-stone-600 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                            >
                                <option value="">Select a topic</option>
                                <option value="Project Collaboration">Project Collaboration</option>
                                <option value="Job Opportunity">Job Opportunity</option>
                                <option value="Consulting Inquiry">Consulting Inquiry</option>
                                <option value="Technical Question">Technical Question</option>
                                <option value="General Inquiry">General Inquiry</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-stone-300 mb-2 font-medium" htmlFor="message">
                                Message <span className="text-red-400">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project, question, or how I can help you..."
                                className="bg-neutral-900 border border-stone-600 p-3 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-vertical"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status.type === 'loading'}
                            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                            {status.type === 'loading' ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactIndex;