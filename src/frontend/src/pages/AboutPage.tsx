import { usePageMeta } from '@/hooks/usePageMeta';
import { Target, Users, Award, Heart, Zap, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower individuals to achieve their fitness goals through expert guidance, world-class facilities, and a supportive community that inspires greatness.',
  },
  {
    icon: Heart,
    title: 'Our Vision',
    description: 'To be the leading fitness destination where every member transforms not just their body, but their entire lifestyle, mindset, and approach to health.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'We believe fitness is better together. Our community of dedicated members motivates, supports, and celebrates each other\'s victories every single day.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in equipment, training, cleanliness, and service. Your success is our success, and we never compromise on quality.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We stay ahead of fitness trends, continuously updating our programs, equipment, and training methods to give you the best possible results.',
  },
  {
    icon: TrendingUp,
    title: 'Results-Driven',
    description: 'Every program, every session, every interaction is designed with one goal: helping you achieve measurable, sustainable results that last.',
  },
];

export default function AboutPage() {
  usePageMeta({
    title: 'About Us',
    description: 'Learn about Hype The Gym - our mission, vision, and commitment to helping you achieve your fitness goals through expert training and world-class facilities.',
  });

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black mb-6 md:text-5xl lg:text-6xl">
            About <span className="bg-gradient-to-r from-[oklch(0.65_0.25_25)] to-[oklch(0.60_0.22_15)] bg-clip-text text-transparent">Hype The Gym</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto md:text-xl">
            We're more than just a gym. We're a movement dedicated to transforming lives through fitness, nutrition, and an unbreakable community spirit.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16 max-w-4xl mx-auto">
          <Card className="border-border/40">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hype The Gym was born from a simple belief: everyone deserves access to world-class fitness training, expert guidance, and a community that pushes them to be their best. What started as a vision has grown into a thriving fitness hub where ordinary people achieve extraordinary results.
                </p>
                <p>
                  We've built more than just a gym—we've created an ecosystem of success. From our state-of-the-art equipment to our certified trainers, from our nutrition coaching to our recovery facilities, every element is designed to support your transformation journey.
                </p>
                <p>
                  Today, we're proud to serve hundreds of members who trust us with their fitness goals. Whether you're taking your first steps into fitness or you're a seasoned athlete, Hype The Gym is your partner in achieving greatness.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="border-border/40 hover:border-[oklch(0.65_0.25_25)]/40 transition-colors">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-[oklch(0.65_0.25_25)]/10 w-12 h-12 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-[oklch(0.65_0.25_25)]" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-muted/30 rounded-lg p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div>
              <div className="text-4xl font-black text-[oklch(0.65_0.25_25)] mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[oklch(0.65_0.25_25)] mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Expert Trainers</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[oklch(0.65_0.25_25)] mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Weekly Classes</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[oklch(0.65_0.25_25)] mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Transformations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
