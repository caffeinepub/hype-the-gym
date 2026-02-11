import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dumbbell, Heart, Zap, Activity, Target, Apple } from 'lucide-react';

const programs = [
  {
    icon: Target,
    title: 'Weight Loss Training',
    description: 'Burn fat and transform your body with our scientifically-designed weight loss programs.',
  },
  {
    icon: Dumbbell,
    title: 'Muscle Building',
    description: 'Build lean muscle mass and strength with progressive overload training protocols.',
  },
  {
    icon: Zap,
    title: 'CrossFit & HIIT',
    description: 'High-intensity workouts that maximize calorie burn and improve overall fitness.',
  },
  {
    icon: Heart,
    title: 'Yoga & Zumba',
    description: 'Improve flexibility, balance, and mental wellness with our mind-body programs.',
  },
  {
    icon: Activity,
    title: 'Personal Training',
    description: 'One-on-one coaching tailored to your specific goals and fitness level.',
  },
  {
    icon: Apple,
    title: 'Nutrition Coaching',
    description: 'Custom meal plans and nutrition guidance to fuel your transformation.',
  },
];

export default function ProgramsPreview() {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">Popular Training Programs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our diverse range of programs designed to help you achieve any fitness goal.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {programs.map((program) => (
            <Card key={program.title} className="border-border/40 hover:border-[oklch(0.65_0.25_25)]/40 transition-colors">
              <CardHeader>
                <div className="rounded-full bg-gradient-to-br from-[oklch(0.65_0.25_25)]/10 to-[oklch(0.50_0.20_145)]/10 w-12 h-12 flex items-center justify-center mb-2">
                  <program.icon className="h-6 w-6 text-[oklch(0.65_0.25_25)]" />
                </div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => navigate({ to: '/programs' })}
            variant="outline"
            className="border-[oklch(0.65_0.25_25)] hover:bg-[oklch(0.65_0.25_25)]/10"
          >
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
}
