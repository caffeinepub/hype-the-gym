import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Lost 25kg in 6 months',
    content: 'Hype The Gym changed my life. The trainers are incredibly knowledgeable and supportive. I never thought I could achieve this level of fitness!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Gained 8kg muscle',
    content: 'The personal training program is exceptional. My trainer created a custom plan that helped me build muscle while staying lean. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Completed first marathon',
    content: 'The cardio and endurance programs prepared me for my first marathon. The community here is amazing and keeps you motivated every single day.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">What Our Members Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from real members who've transformed their lives at Hype The Gym.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border/40">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[oklch(0.65_0.25_25)] text-[oklch(0.65_0.25_25)]" />
                  ))}
                </div>
                <p className="text-sm mb-4 text-muted-foreground italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-[oklch(0.65_0.25_25)]/10 text-[oklch(0.65_0.25_25)]">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
