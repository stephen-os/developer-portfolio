import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export enum Priority {
    FEATURED = 'featured',
    IMPORTANT = 'important',
    STANDARD = 'standard',
    ARCHIVE = 'archive'
}

export interface Project {
    slug: string;
    title: string;
    description: string;
    image: string;
    tech: string[];
    github: string;
    priority: Priority;
}

export interface Projects {
    featured: Project[];
    important: Project[];
    standard: Project[];
    archive: Project[];
}

interface ProjectData {
    title?: string;
    description?: string;
    image?: string;
    tech?: string[] | string | unknown;
    github?: string;
    priority?: string;
}

const resolveSlug = (slug: string): string => {
    if (!slug || typeof slug !== 'string' || slug.trim() === '') {
        throw new Error('Project slug is required and must be a non-empty string');
    }
    return slug.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-');
};

const resolveTitle = (title?: string): string => {
    if (!title || typeof title !== 'string') {
        return "Untitled Project";
    }
    const trimmed = title.trim();
    return trimmed || "Untitled Project";
};

const resolveDescription = (description?: string): string => {
    if (!description || typeof description !== 'string') {
        return "No description available";
    }
    const trimmed = description.trim();
    return trimmed || "No description available";
};

const resolveImage = (image?: string): string => {
    if (!image || typeof image !== 'string') {
        return '/icons/file.svg';
    }

    const trimmed = image.trim();
    if (!trimmed) {
        return '/icons/file.svg';
    }

    const fullPath = path.join(process.cwd(), 'public', trimmed);
    if (!fs.existsSync(fullPath)) {
        console.warn(`Image file not found: ${trimmed}, using default`);
        return '/icons/file.svg';
    }

    return trimmed;
};

const resolveTech = (tech?: string[] | string | unknown): string[] => {
    if (!tech) {
        return [];
    }

    if (Array.isArray(tech)) {
        return tech
            .filter((item): item is string => {
                if (typeof item !== 'string' || !item.trim()) {
                    console.warn(`Invalid tech item found, skipping: ${item}`);
                    return false;
                }
                return true;
            })
            .map(item => item.trim().toLowerCase());
    }

    if (typeof tech === 'string' && tech.trim()) {
        return [tech.trim().toLowerCase()];
    }

    console.warn('Tech field is not an array or string, using empty array');
    return [];
};

const resolveGithub = (github?: string): string => {
    if (!github || typeof github !== 'string') {
        return '';
    }

    const trimmed = github.trim();

    if (trimmed && !trimmed.startsWith('http')) {
        console.warn(`GitHub URL should start with http/https: ${trimmed}`);
    }

    return trimmed;
};

const resolvePriority = (priority?: string): Priority => {
    if (!priority || typeof priority !== 'string') {
        return Priority.STANDARD;
    }

    const trimmed = priority.trim().toLowerCase();

    if (Object.values(Priority).includes(trimmed as Priority)) {
        return trimmed as Priority;
    }

    console.warn(`Invalid priority "${priority}", using standard`);
    return Priority.STANDARD;
};

const createProject = (slug: string, data: ProjectData): Project => {
    return {
        slug: resolveSlug(slug),
        title: resolveTitle(data.title),
        description: resolveDescription(data.description),
        image: resolveImage(data.image),
        tech: resolveTech(data.tech),
        github: resolveGithub(data.github),
        priority: resolvePriority(data.priority)
    };
};

export class ProjectLoader {
    private static readonly PROJECTS_DIR = path.join(process.cwd(), 'data', 'projects');

    static fromFile(filePath: string): Project {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent) as { data: ProjectData };
        const filename = path.basename(filePath);
        const slug = filename.replace(/\.md$/, '');

        return createProject(slug, data);
    }

    static getAllProjects(): Project[] {
        if (!fs.existsSync(this.PROJECTS_DIR)) {
            console.error(`Projects directory does not exist: ${this.PROJECTS_DIR}`);
            return [];
        }

        const filenames = fs.readdirSync(this.PROJECTS_DIR);
        const markdownFiles = filenames.filter(filename => filename.endsWith('.md'));
        const projects: Project[] = [];

        for (const filename of markdownFiles) {
            try {
                const filePath = path.join(this.PROJECTS_DIR, filename);
                const project = this.fromFile(filePath);
                projects.push(project);
            } catch (error) {
                console.error(`Failed to load project ${filename}:`, error);
            }
        }

        return projects;
    }

    static getCategorizedProjects(): Projects {
        const allProjects = this.getAllProjects();

        const categorized: Projects = {
            featured: [],
            important: [],
            standard: [],
            archive: []
        };

        allProjects.forEach(project => {
            switch (project.priority) {
                case Priority.FEATURED:
                    categorized.featured.push(project);
                    break;
                case Priority.IMPORTANT:
                    categorized.important.push(project);
                    break;
                case Priority.STANDARD:
                    categorized.standard.push(project);
                    break;
                case Priority.ARCHIVE:
                    categorized.archive.push(project);
                    break;
            }
        });

        // Sort each category alphabetically by title
        Object.keys(categorized).forEach(key => {
            const categoryKey = key as keyof Projects;
            categorized[categoryKey].sort((a, b) => a.title.localeCompare(b.title));
        });

        return categorized;
    }
}