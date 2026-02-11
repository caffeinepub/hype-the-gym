import { usePageMeta } from '@/hooks/usePageMeta';
import { useParams, useNavigate } from '@tanstack/react-router';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/content/blogPosts';

export default function BlogPostPage() {
  const { slug } = useParams({ from: '/blog/$slug' });
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  usePageMeta({
    title: post?.title || 'Blog Post',
    description: post?.excerpt || 'Read our latest fitness tips and advice.',
  });

  const handleBackClick = () => {
    navigate({ to: '/blog' });
  };

  if (!post) {
    return (
      <div className="py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button variant="outline" onClick={handleBackClick}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" className="mb-8" onClick={handleBackClick}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>

          <article>
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary">{post.category}</Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
              </div>
              <h1 className="text-4xl font-black mb-4 md:text-5xl">{post.title}</h1>
              <p className="text-xl text-muted-foreground">{post.excerpt}</p>
            </header>

            <div 
              className="prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-bold prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-ul:mb-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          <div className="mt-12 pt-8 border-t border-border">
            <Button variant="outline" size="lg" onClick={handleBackClick}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Posts
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
