import { usePageMeta } from '@/hooks/usePageMeta';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ProgramsPreview from '@/components/home/ProgramsPreview';
import MembershipPlansPreview from '@/components/home/MembershipPlansPreview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import TrainerPreview from '@/components/home/TrainerPreview';
import MapAndContactSection from '@/components/contact/MapAndContactSection';

export default function HomePage() {
  usePageMeta({
    title: 'Home',
    description: 'Transform your body, transform your life. Join Hype The Gym - the ultimate fitness community with expert trainers, premium equipment, and proven results.',
  });

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramsPreview />
      <MembershipPlansPreview />
      <TestimonialsSection />
      <WhyChooseSection />
      <TrainerPreview />
      <MapAndContactSection />
    </>
  );
}
