import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export type Skill = {
    name: string;
    icon?: string;
    years?: number;
};

export type SkillCategory = {
    title: string;
    skills: Skill[];
    description: string;
};

type SkillCardProps = {
    category: SkillCategory;
    index: number;
};

const SkillCard = ({ category, index }: SkillCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-neutral-800 hover:bg-neutral-700 rounded-xl p-6 shadow-md transition-colors duration-200 border border-stone-700"
        >
            <div className="mb-4">
                <h2 className="text-2xl font-semibold text-white mb-2">{category.title}</h2>
                <p className="text-stone-400 text-sm">{category.description}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex flex-col items-center p-3 bg-neutral-900 rounded-lg hover:bg-neutral-600 transition-colors duration-200 group"
                    >
                        <div className="mb-2 group-hover:scale-110 transition-transform duration-200">
                            {skill.icon ? (
                                <Image
                                    src={`/icons/${skill.icon}.svg`}
                                    alt={skill.name}
                                    width={32}
                                    height={32}
                                    className="filter brightness-90 group-hover:brightness-110"
                                />
                            ) : (
                                <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center">
                                    <span className="text-stone-400 text-xs font-bold">
                                        {skill.name.charAt(0).toUpperCase()}
                                    </span>
                                </div>
                            )}
                        </div>
                        <span className="text-white text-sm font-medium text-center leading-tight">
                            {skill.name}
                        </span>
                        {skill.years && (
                            <span className="text-orange-500 text-xs mt-1">
                                {skill.years}y
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillCard;