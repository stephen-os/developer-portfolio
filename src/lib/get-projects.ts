// lib/get-projects.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Project = {
    slug: string;
    title: string;
    description: string;
    image: string;
};

export const getAllProjects = (): Project[] => {
    const dir = path.join(process.cwd(), 'data', 'projects');
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
            image: `/images/${data.image}`,
        };
    });
};
