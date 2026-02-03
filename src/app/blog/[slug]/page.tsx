import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog-posts';
import BlogPostContent from '@/components/blog/BlogPostContent';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts[slug];

    if (!post) {
        return {
            title: 'Post Not Found | Digital Marketing Blog',
        };
    }

    return {
        metadataBase: new URL("https://ahmdluthu.com"),
        title: `${post.title} | Ahmd Luthu`,
        description: post.metaDescription || post.excerpt,
        keywords: post.keywords?.join(', '),
        openGraph: {
            title: post.title,
            description: post.metaDescription || post.excerpt,
            images: [post.image],
            type: 'article',
            publishedTime: post.date,
            authors: ['Ahmd Luthu'],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.metaDescription || post.excerpt,
            images: [post.image],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts[slug];

    if (!post) {
        notFound();
    }

    // JSON-LD Structured Data
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        image: post.image,
        datePublished: post.date,
        author: {
            '@type': 'Person',
            name: 'Ahmd Luthu',
            url: 'https://ahmdluthu.com', // Replace with actual URL if known
        },
        publisher: {
            '@type': 'Organization',
            name: 'Ahmd Luthu Digital',
            logo: {
                '@type': 'ImageObject',
                url: 'https://ahmdluthu.com/logo.png', // Replace with actual logo URL
            },
        },
        description: post.metaDescription || post.excerpt,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BlogPostContent post={post} />
        </>
    );
}
