import { Target, Users, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Empowering individuals to achieve their fitness goals through expert guidance and world-class facilities.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Join a supportive community of like-minded individuals who motivate and inspire each other daily.',
  },
  {
    icon: Award,
    title: 'Certified Experts',
    description: 'Train with certified professionals who bring years of experience and proven results.',
  },
  {
    icon: TrendingUp,
    title: 'Results Guaranteed',
    description: 'Our proven programs and personalized approach ensure you achieve measurable results.',
  },
];

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">About Hype The Gym</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We're not just a gym—we're a movement. A place where dedication meets results, and ordinary people achieve extraordinary transformations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border/40 hover:border-[oklch(0.65_0.25_25)]/40 transition-colors">
              <CardContent className="pt-6">
                <div className="rounded-full bg-[oklch(0.65_0.25_25)]/10 w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-[oklch(0.65_0.25_25)]" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
