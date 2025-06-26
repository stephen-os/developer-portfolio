// lib/get-blogs.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Blog = {
    slug: string;
    title: string;
    description: string;
    image: string;
    date?: string;
    readTime?: string;
    tags?: string[];
};

export const getAllBlogs = (): Blog[] => {
    const dir = path.join(process.cwd(), 'data', 'blogs');

    // Check if blogs directory exists
    if (!fs.existsSync(dir)) {
        return [];
    }

    const filenames = fs.readdirSync(dir);

    return filenames
        .filter(filename => filename.endsWith('.md'))
        .map((filename) => {
            const filePath = path.join(dir, filename);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const { data } = matter(fileContent);
            const slug = filename.replace(/\.md$/, '');

            return {
                slug,
                title: data.title,
                description: data.description,
                image: `/images/${data.image}`,
                date: data.date || null,
                readTime: data.readTime || null,
                tags: data.tags || [],
            };
        })
        .sort((a, b) => {
            // Sort by date if available, newest first
            if (a.date && b.date) {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            }
            // If only one has a date, prioritize it
            if (a.date && !b.date) return -1;
            if (!a.date && b.date) return 1;
            // If neither has a date, sort alphabetically by title
            return a.title.localeCompare(b.title);
        });
};