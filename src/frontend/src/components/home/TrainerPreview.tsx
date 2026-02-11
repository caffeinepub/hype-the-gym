import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import TrainerCard from '../trainers/TrainerCard';

const trainers = [
  {
    name: 'Alex Rodriguez',
    role: 'Head Strength Coach',
    specialty: 'Powerlifting & Muscle Building',
    certifications: ['NSCA-CPT', 'CSCS'],
    image: '/assets/generated/hype-trainer-1.dim_900x1200.png',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Nutrition & Wellness Coach',
    specialty: 'Weight Loss & Nutrition',
    certifications: ['ACE', 'Precision Nutrition L2'],
    image: '/assets/generated/hype-trainer-2.dim_900x1200.png',
  },
  {
    name: 'Marcus Chen',
    role: 'CrossFit & HIIT Specialist',
    specialty: 'Functional Fitness & Conditioning',
    certifications: ['CrossFit L2', 'NASM-PES'],
    image: '/assets/generated/hype-trainer-3.dim_900x1200.png',
  },
];

export default function TrainerPreview() {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">Meet Our Expert Trainers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Train with certified professionals who are passionate about helping you achieve your goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.name} trainer={trainer} />
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => navigate({ to: '/trainers' })}
            variant="outline"
            className="border-[oklch(0.65_0.25_25)] hover:bg-[oklch(0.65_0.25_25)]/10"
          >
            View All Trainers
          </Button>
        </div>
      </div>
    </section>
  );
}
