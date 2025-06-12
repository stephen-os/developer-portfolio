// lib/get-blogs.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Blog = {
    slug: string;
    title: string;
    description: string;
    image: string;
};

export const getAllBlogs = (): Blog[] => {
    const dir = path.join(process.cwd(), 'data', 'blogs');
    const filenames = fs.readdirSync(dir);

    return filenames.map((filename) => {
        const filePath = path.join(dir, filename);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        const slug = filename.replace(/\.md$/, '');

        return {
            slug,
            title: data.title,
            description: data.description,
            image: `/images/blogs/${data.image}`,
        };
    });
};
