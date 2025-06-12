// components/MarkdownRenderer.tsx

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';

const components = {
    img: (props: any) => {
        const fullSrc = `/images/${props.src}`;
        console.log('Rendering image with src:', fullSrc); // ✅ Debug output
        return (
            <Image
                src={fullSrc}
                alt={props.alt}
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
