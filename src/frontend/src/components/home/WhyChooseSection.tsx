import { Shield, Clock, Users, Trophy, Sparkles, HeartPulse } from 'lucide-react';

const reasons = [
  {
    icon: Trophy,
    title: 'Proven Results',
    description: 'Hundreds of successful transformations and counting',
  },
  {
    icon: Users,
    title: 'Expert Trainers',
    description: 'Certified professionals with years of experience',
  },
  {
    icon: Sparkles,
    title: 'Premium Equipment',
    description: 'State-of-the-art machines and facilities',
  },
  {
    icon: Clock,
    title: 'Flexible Hours',
    description: 'Open 5 AM to 11 PM, 7 days a week',
  },
  {
    icon: HeartPulse,
    title: 'Holistic Approach',
    description: 'Training, nutrition, and recovery all in one place',
  },
  {
    icon: Shield,
    title: 'Safe Environment',
    description: 'Clean, sanitized, and professionally maintained',
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">Why Choose Hype The Gym?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best fitness experience. Here's what sets us apart.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="rounded-full bg-gradient-to-br from-[oklch(0.65_0.25_25)]/10 to-[oklch(0.50_0.20_145)]/10 w-12 h-12 flex items-center justify-center shrink-0">
                <reason.icon className="h-6 w-6 text-[oklch(0.65_0.25_25)]" />
              </div>
              <div>
                <h3 className="font-bold mb-1">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
