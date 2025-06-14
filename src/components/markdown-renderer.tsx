// components/MarkdownRenderer.tsx

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import type { ImgHTMLAttributes } from 'react';

const CLEAN_STYLE = [
    // Base container
    'bg-neutral-800 rounded-2xl shadow-lg p-6 mt-6',
    'text-neutral-100 leading-relaxed',

    // Typography hierarchy
    '[&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-6 [&_h1]:text-white [&_h1]:border-b [&_h1]:border-neutral-600 [&_h1]:pb-3',
    '[&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:text-white',
    '[&_h3]:text-xl [&_h3]:font-medium [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:text-neutral-200',
    '[&_h4]:text-lg [&_h4]:font-medium [&_h4]:mb-2 [&_h4]:mt-4 [&_h4]:text-neutral-300',

    // Paragraphs and text
    '[&_p]:mb-4 [&_p]:text-neutral-200 [&_p]:text-base [&_p]:leading-7',
    '[&_strong]:text-white [&_strong]:font-semibold',
    '[&_em]:text-neutral-300 [&_em]:italic',

    // Lists
    '[&_ul]:mb-4 [&_ul]:ml-6 [&_ul]:space-y-2',
    '[&_ol]:mb-4 [&_ol]:ml-6 [&_ol]:space-y-2',
    '[&_li]:text-neutral-200 [&_li]:leading-6',
    '[&_ul>li]:list-disc [&_ol>li]:list-decimal',

    // Links
    '[&_a]:text-blue-400 [&_a]:hover:text-blue-300 [&_a]:transition-colors [&_a]:underline [&_a]:underline-offset-2',

    // Code
    '[&_code]:bg-neutral-900 [&_code]:text-orange-300 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono',
    '[&_pre]:bg-neutral-900 [&_pre]:rounded-lg [&_pre]:p-4 [&_pre]:mb-4 [&_pre]:overflow-x-auto',
    '[&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-neutral-100',

    // Blockquotes
    '[&_blockquote]:border-l-4 [&_blockquote]:border-blue-500 [&_blockquote]:pl-4 [&_blockquote]:py-2 [&_blockquote]:mb-4 [&_blockquote]:bg-neutral-700/30 [&_blockquote]:rounded-r',
    '[&_blockquote_p]:text-neutral-300 [&_blockquote_p]:italic [&_blockquote_p]:mb-0',

    // Dividers
    '[&_hr]:border-neutral-600 [&_hr]:my-8',

    // Tables
    '[&_table]:w-full [&_table]:mb-4 [&_table]:border-collapse',
    '[&_th]:border [&_th]:border-neutral-600 [&_th]:bg-neutral-700 [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_th]:text-white',
    '[&_td]:border [&_td]:border-neutral-600 [&_td]:px-4 [&_td]:py-2 [&_td]:text-neutral-200',
].join(' ');

const components = {
    img: (props: ImgHTMLAttributes<HTMLImageElement>) => {
        if (!props.src) return null;
        const fullSrc = `/images/${props.src}`;
        return (
            <Image
                src={fullSrc}
                alt={props.alt ?? ''}
                width={800}
                height={400}
                className="rounded-lg my-6 mx-auto"
            />
        );
    },
};

export default function MarkdownRenderer({
    source,
}: {
    source: MDXRemoteSerializeResult;
}) {
    return (
        <div className={CLEAN_STYLE}>
            <MDXRemote {...source} />
        </div>
    );
}
