import { usePageMeta } from '@/hooks/usePageMeta';
import { useNavigate } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import { blogPosts } from '@/content/blogPosts';

export default function BlogIndexPage() {
  const navigate = useNavigate();

  usePageMeta({
    title: 'Blog & Fitness Tips',
    description: 'Expert fitness advice, training tips, nutrition guidance, and motivational content from the trainers at Hype The Gym.',
  });

  const handlePostClick = (slug: string) => {
    navigate({ to: '/blog/$slug', params: { slug } });
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black mb-6 md:text-5xl lg:text-6xl">
            Fitness <span className="bg-gradient-to-r from-[oklch(0.65_0.25_25)] to-[oklch(0.60_0.22_15)] bg-clip-text text-transparent">Tips & Advice</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto md:text-xl">
            Expert insights, training tips, and motivational content to help you achieve your fitness goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <button
              key={post.slug}
              onClick={() => handlePostClick(post.slug)}
              className="text-left"
            >
              <Card className="h-full border-border/40 hover:border-[oklch(0.65_0.25_25)]/40 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-[oklch(0.65_0.25_25)] transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
              </Card>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
