import { Metadata } from 'next';
import { blogPosts } from '@/data/blog-posts';
import BlogListingContent from '@/components/blog/BlogListingContent';

export const metadata: Metadata = {
    metadataBase: new URL("https://ahmdluthukannur.in"),
    title: 'Digital Marketing Blog | Ahmd Luthu',
    description: 'Expert insights on AI-first marketing, technical SEO, and business growth strategies from the best freelance digital marketer in Kannur.',
    keywords: 'digital marketing blog kannur, freelance marketer kannur, AI marketing insights, growth strategy kannur, Ahmd Luthu',
    openGraph: {
        title: 'Digital Marketing Blog | Ahmd Luthu',
        description: 'Expert insights on AI-first marketing, technical SEO, and business growth strategies from the best freelance digital marketer in Kannur.',
        type: 'website',
    }
};

export default function BlogListingPage() {
    const posts = Object.values(blogPosts);

    return <BlogListingContent posts={posts} />;
}
