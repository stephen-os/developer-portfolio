// lib/mdx.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

type Frontmatter = {
    title: string;
    description: string;
    image: string;
};

export async function getMdxContent(
    folder: string,
    slug: string
): Promise<{ source: MDXRemoteSerializeResult; data: Frontmatter }> {
    const filePath = path.join(process.cwd(), 'data', folder, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const { content, data } = matter(fileContent);

    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [rehypeHighlight],
        },
    });

    return {
        source: mdxSource,
        data: data as Frontmatter,
    };
}

export function getAllSlugs(folder: string): string[] {
    const dir = path.join(process.cwd(), 'data', folder);
    return fs.readdirSync(dir).map((file) => file.replace(/\.md$/, ''));
}
