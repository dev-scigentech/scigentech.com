import type { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-data';
import BlogCategoryFilter from '@/app/components/blog/BlogCategoryFilter';
import FeaturedPost from '@/app/components/blog/FeaturedPost';
import BlogPostCard from '@/app/components/blog/BlogPostCard';

export const metadata: Metadata = {
  title: 'SciGen Blog | Scientific Insights & Research',
  description:
    "Expert insights on scientific software, research methodologies, and technological innovations from SciGen's team of scientists and engineers.",
};

export default function BlogPage() {
  // Get the most recent post for the featured section
  const featuredPost = blogPosts[3];

  // The rest of the posts
  const remainingPosts = blogPosts.slice(0);

  return (
    <div className='bg-background min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-foreground sm:text-5xl mb-4'>
            SciGen Blog
          </h1>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Expert insights on scientific software, research methodologies, and
            technological innovations from our team of scientists and engineers.
          </p>
        </div>

        {/* Featured Post */}
        <FeaturedPost post={featuredPost} />

        {/* Category Filter */}
        <div className='my-16'>
          <BlogCategoryFilter />
        </div>

        {/* Blog Posts Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {remainingPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
