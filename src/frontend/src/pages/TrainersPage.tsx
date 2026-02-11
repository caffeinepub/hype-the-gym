import { usePageMeta } from '@/hooks/usePageMeta';
import TrainerCard from '@/components/trainers/TrainerCard';

const trainers = [
  {
    name: 'Alex Rodriguez',
    role: 'Head Strength Coach',
    specialty: 'Powerlifting & Muscle Building',
    certifications: ['NSCA-CPT', 'CSCS', 'USA Powerlifting'],
    image: '/assets/generated/hype-trainer-1.dim_900x1200.png',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Nutrition & Wellness Coach',
    specialty: 'Weight Loss & Nutrition',
    certifications: ['ACE', 'Precision Nutrition L2', 'RD'],
    image: '/assets/generated/hype-trainer-2.dim_900x1200.png',
  },
  {
    name: 'Marcus Chen',
    role: 'CrossFit & HIIT Specialist',
    specialty: 'Functional Fitness & Conditioning',
    certifications: ['CrossFit L2', 'NASM-PES', 'FMS'],
    image: '/assets/generated/hype-trainer-3.dim_900x1200.png',
  },
  {
    name: 'Priya Kapoor',
    role: 'Yoga & Mindfulness Instructor',
    specialty: 'Yoga, Flexibility & Recovery',
    certifications: ['RYT-500', 'ACE', 'Meditation Teacher'],
    image: '/assets/generated/hype-trainer-4.dim_900x1200.png',
  },
  {
    name: 'David Thompson',
    role: 'Athletic Performance Coach',
    specialty: 'Sports Performance & Speed',
    certifications: ['CSCS', 'USAW', 'NASM-PES'],
    image: '/assets/generated/hype-trainer-5.dim_900x1200.png',
  },
  {
    name: 'Lisa Anderson',
    role: 'Group Fitness Director',
    specialty: 'Zumba, Bootcamp & Group Classes',
    certifications: ['ACE-GFI', 'Zumba Licensed', 'TRX'],
    image: '/assets/generated/hype-trainer-6.dim_900x1200.png',
  },
];

export default function TrainersPage() {
  usePageMeta({
    title: 'Our Expert Trainers',
    description: 'Meet the certified fitness professionals at Hype The Gym. Our expert trainers bring years of experience and proven results to help you achieve your goals.',
  });

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black mb-6 md:text-5xl lg:text-6xl">
            Meet Our <span className="bg-gradient-to-r from-[oklch(0.65_0.25_25)] to-[oklch(0.60_0.22_15)] bg-clip-text text-transparent">Expert Trainers</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto md:text-xl">
            Our certified trainers are passionate about fitness and dedicated to helping you achieve your goals. With years of experience and proven results, they're here to guide you every step of the way.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.name} trainer={trainer} />
          ))}
        </div>
      </div>
    </div>
  );
}
