import { usePageMeta } from '@/hooks/usePageMeta';
import ProgramCard from '@/components/programs/ProgramCard';
import { Target, Dumbbell, User, Activity, Zap, Heart, TrendingUp, Flame, Apple } from 'lucide-react';

const programs = [
  {
    icon: Target,
    title: 'Weight Loss Training',
    description: 'Scientifically designed programs to help you burn fat, lose weight, and achieve your ideal body composition.',
    benefits: [
      'Customized calorie-burning workouts',
      'Metabolic conditioning protocols',
      'Body composition tracking',
      'Nutrition guidance for fat loss',
      'Sustainable lifestyle changes',
    ],
  },
  {
    icon: Dumbbell,
    title: 'Muscle Building',
    description: 'Progressive overload training programs designed to maximize muscle growth and strength gains.',
    benefits: [
      'Hypertrophy-focused training splits',
      'Progressive overload programming',
      'Compound and isolation exercises',
      'Muscle-building nutrition plans',
      'Recovery optimization strategies',
    ],
  },
  {
    icon: User,
    title: 'Personal Training',
    description: 'One-on-one coaching tailored specifically to your goals, fitness level, and individual needs.',
    benefits: [
      'Personalized workout programs',
      'Form correction and technique coaching',
      'Accountability and motivation',
      'Flexible scheduling options',
      'Regular progress assessments',
    ],
  },
  {
    icon: Activity,
    title: 'Cardio Training',
    description: 'Improve cardiovascular health, endurance, and stamina with our diverse cardio programs.',
    benefits: [
      'LISS and HIIT cardio options',
      'Heart rate zone training',
      'Endurance building protocols',
      'Fat-burning cardio sessions',
      'Performance tracking',
    ],
  },
  {
    icon: Zap,
    title: 'CrossFit & HIIT',
    description: 'High-intensity functional fitness that builds strength, power, and conditioning simultaneously.',
    benefits: [
      'Functional movement patterns',
      'Constantly varied workouts',
      'Community-driven classes',
      'Scalable for all fitness levels',
      'Competition preparation',
    ],
  },
  {
    icon: Heart,
    title: 'Yoga & Zumba',
    description: 'Mind-body programs that improve flexibility, balance, coordination, and mental wellness.',
    benefits: [
      'Stress reduction and mindfulness',
      'Improved flexibility and mobility',
      'Fun, dance-based cardio workouts',
      'Core strength development',
      'Community group classes',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Strength & Conditioning',
    description: 'Build raw strength, power, and athletic performance with our comprehensive S&C programs.',
    benefits: [
      'Powerlifting and Olympic lifting',
      'Athletic performance training',
      'Explosive power development',
      'Injury prevention protocols',
      'Sport-specific conditioning',
    ],
  },
  {
    icon: Flame,
    title: 'Fat Loss Bootcamp',
    description: 'Intensive group training sessions designed to maximize calorie burn and accelerate fat loss.',
    benefits: [
      'High-energy group workouts',
      'Full-body fat-burning circuits',
      'Motivating team environment',
      'Varied training modalities',
      'Measurable results tracking',
    ],
  },
  {
    icon: Apple,
    title: 'Diet & Nutrition Coaching',
    description: 'Expert nutrition guidance to fuel your training, optimize recovery, and achieve your body composition goals.',
    benefits: [
      'Personalized meal planning',
      'Macronutrient calculations',
      'Supplement recommendations',
      'Habit-based coaching',
      'Ongoing support and adjustments',
    ],
  },
];

export default function ProgramsPage() {
  usePageMeta({
    title: 'Programs & Training Plans',
    description: 'Explore our comprehensive range of fitness programs including weight loss, muscle building, CrossFit, personal training, and nutrition coaching at Hype The Gym.',
  });

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black mb-6 md:text-5xl lg:text-6xl">
            Our <span className="bg-gradient-to-r from-[oklch(0.65_0.25_25)] to-[oklch(0.60_0.22_15)] bg-clip-text text-transparent">Programs</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto md:text-xl">
            Whatever your fitness goal, we have a program designed to get you there. Expert coaching, proven methods, and real results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
}
