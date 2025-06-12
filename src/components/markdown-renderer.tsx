// components/MarkdownRenderer.tsx

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import type { ImgHTMLAttributes } from 'react';

const components = {
    img: (props: ImgHTMLAttributes<HTMLImageElement>) => {
        const fullSrc = `/images/${props.src}`;
        return (
            <Image
                src={fullSrc}
                alt={props.alt ?? ''}
                width={800}
                height={400}
                className="rounded-lg my-6"
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
        <div className="bg-neutral-800 border border-orange-500 rounded-2xl shadow-lg px-6 py-4 mt-6 whitespace-pre-wrap">
            <MDXRemote {...source} components={components} />
        </div>
    );
}
