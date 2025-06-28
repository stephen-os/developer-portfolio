import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import type { ImgHTMLAttributes } from 'react';

const CLEAN_STYLE = [
    // Typography hierarchy - mobile responsive
    '[&_h1]:text-2xl sm:[&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-4 sm:[&_h1]:mb-6 [&_h1]:text-white [&_h1]:border-b [&_h1]:border-neutral-600 [&_h1]:pb-3',
    '[&_h1]:break-words [&_h1]:overflow-wrap-anywhere',

    '[&_h2]:text-xl sm:[&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mb-3 sm:[&_h2]:mb-4 [&_h2]:mt-6 sm:[&_h2]:mt-8 [&_h2]:text-white',
    '[&_h2]:break-words [&_h2]:overflow-wrap-anywhere',

    '[&_h3]:text-lg sm:[&_h3]:text-xl [&_h3]:font-medium [&_h3]:mb-2 sm:[&_h3]:mb-3 [&_h3]:mt-4 sm:[&_h3]:mt-6 [&_h3]:text-neutral-200',
    '[&_h3]:break-words [&_h3]:overflow-wrap-anywhere',

    '[&_h4]:text-base sm:[&_h4]:text-lg [&_h4]:font-medium [&_h4]:mb-2 [&_h4]:mt-3 sm:[&_h4]:mt-4 [&_h4]:text-neutral-300',

    // Paragraphs and text - mobile responsive
    '[&_p]:mb-3 sm:[&_p]:mb-4 [&_p]:text-neutral-200 [&_p]:text-sm sm:[&_p]:text-base [&_p]:leading-6 sm:[&_p]:leading-7',
    '[&_p]:break-words [&_p]:overflow-wrap-anywhere',
    '[&_strong]:text-white [&_strong]:font-semibold [&_strong]:break-words',
    '[&_em]:text-neutral-300 [&_em]:italic [&_em]:break-words',

    // Lists - mobile responsive
    '[&_ul]:mb-3 sm:[&_ul]:mb-4 [&_ul]:ml-4 sm:[&_ul]:ml-6 [&_ul]:space-y-1 sm:[&_ul]:space-y-2',
    '[&_ol]:mb-3 sm:[&_ol]:mb-4 [&_ol]:ml-4 sm:[&_ol]:ml-6 [&_ol]:space-y-1 sm:[&_ol]:space-y-2',
    '[&_li]:text-neutral-200 [&_li]:leading-5 sm:[&_li]:leading-6 [&_li]:text-sm sm:[&_li]:text-base',
    '[&_li]:break-words [&_li]:overflow-wrap-anywhere',
    '[&_ul>li]:list-disc [&_ol>li]:list-decimal',

    // Links - mobile responsive with aggressive breaking
    '[&_a]:text-blue-400 [&_a]:hover:text-blue-300 [&_a]:transition-colors [&_a]:underline [&_a]:underline-offset-2',
    '[&_a]:break-words [&_a]:overflow-wrap-anywhere [&_a]:word-break-break-all',
    '[&_a]:text-sm sm:[&_a]:text-base',

    // Code - mobile responsive with proper overflow
    '[&_code]:bg-neutral-900 [&_code]:text-orange-300 [&_code]:px-1.5 sm:[&_code]:px-2 [&_code]:py-1 [&_code]:rounded',
    '[&_code]:text-xs sm:[&_code]:text-sm [&_code]:font-mono [&_code]:break-all [&_code]:overflow-wrap-anywhere',

    '[&_pre]:bg-neutral-900 [&_pre]:rounded-lg [&_pre]:p-3 sm:[&_pre]:p-4 [&_pre]:mb-3 sm:[&_pre]:mb-4',
    '[&_pre]:overflow-x-auto [&_pre]:text-xs sm:[&_pre]:text-sm',
    '[&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-neutral-100 [&_pre_code]:whitespace-pre',

    // Blockquotes - mobile responsive
    '[&_blockquote]:border-l-2 sm:[&_blockquote]:border-l-4 [&_blockquote]:border-blue-500',
    '[&_blockquote]:pl-3 sm:[&_blockquote]:pl-4 [&_blockquote]:py-2 [&_blockquote]:mb-3 sm:[&_blockquote]:mb-4',
    '[&_blockquote]:bg-neutral-700/30 [&_blockquote]:rounded-r',
    '[&_blockquote_p]:text-neutral-300 [&_blockquote_p]:italic [&_blockquote_p]:mb-0',
    '[&_blockquote_p]:text-sm sm:[&_blockquote_p]:text-base',

    // Dividers
    '[&_hr]:border-neutral-600 [&_hr]:my-6 sm:[&_hr]:my-8',

    // Tables - mobile responsive
    '[&_table]:w-full [&_table]:mb-4 [&_table]:text-xs sm:[&_table]:text-sm [&_table]:overflow-x-auto [&_table]:block sm:[&_table]:table',
    '[&_table]:border-collapse',

    '[&_thead]:block sm:[&_thead]:table-header-group',
    '[&_tbody]:block sm:[&_tbody]:table-row-group',
    '[&_tr]:block sm:[&_tr]:table-row [&_tr]:border-b sm:[&_tr]:border-b-0 [&_tr]:border-neutral-600 [&_tr]:mb-2 sm:[&_tr]:mb-0',

    '[&_th]:block sm:[&_th]:table-cell [&_th]:border [&_th]:border-neutral-600 [&_th]:bg-neutral-700',
    '[&_th]:px-2 sm:[&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_th]:text-white',
    '[&_th]:text-xs sm:[&_th]:text-sm [&_th]:break-words',

    '[&_td]:block sm:[&_td]:table-cell [&_td]:border [&_td]:border-neutral-600',
    '[&_td]:px-2 sm:[&_td]:px-4 [&_td]:py-2 [&_td]:text-neutral-200',
    '[&_td]:text-xs sm:[&_td]:text-sm [&_td]:break-words',
].join(' ');

const components = {
    img: (props: ImgHTMLAttributes<HTMLImageElement>) => {
        if (!props.src) return null;
        const fullSrc = `/images/${props.src}`;
        return (
            <div className="my-4 sm:my-6 w-full overflow-hidden">
                <Image
                    src={fullSrc}
                    alt={props.alt ?? ''}
                    width={800}
                    height={400}
                    className="rounded-lg w-full h-auto object-cover max-w-full"
                    sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1024px) 80vw, 800px"
                />
            </div>
        );
    },
};

export default function MarkdownRenderer({
    source,
}: {
    source: MDXRemoteSerializeResult;
}) {
    return (
        <div
            className="bg-neutral-800 rounded-2xl shadow-lg p-6 sm:p-6 mt-6 text-neutral-100 leading-relaxed"
            style={{
                width: 'calc(100vw - 2rem)',
                maxWidth: '100%',
                minWidth: 0,
                overflowX: 'hidden',
                boxSizing: 'border-box'
            }}
        >
            <div className={CLEAN_STYLE}>
                <MDXRemote {...source} components={components} />
            </div>
        </div>
    );
}