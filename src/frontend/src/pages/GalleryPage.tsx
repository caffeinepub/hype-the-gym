import { usePageMeta } from '@/hooks/usePageMeta';
import GalleryGrid from '@/components/gallery/GalleryGrid';

const galleryImages = [
  { src: '/assets/generated/hype-gym-interior-1.dim_1920x1080.png', alt: 'Gym interior with premium equipment' },
  { src: '/assets/generated/hype-gym-interior-2.dim_1920x1080.png', alt: 'Modern gym training area' },
  { src: '/assets/generated/hype-equipment-1.dim_1920x1080.png', alt: 'State-of-the-art gym equipment' },
  { src: '/assets/generated/hype-equipment-2.dim_1920x1080.png', alt: 'Premium fitness equipment' },
  { src: '/assets/generated/hype-hero-bg.dim_2400x1200.png', alt: 'Gym atmosphere and environment' },
];

export default function GalleryPage() {
  usePageMeta({
    title: 'Gallery',
    description: 'Explore our state-of-the-art facilities and premium equipment at Hype The Gym.',
  });

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black mb-6 md:text-5xl lg:text-6xl">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto md:text-xl">
            Take a virtual tour of our premium facilities and see the world-class equipment at Hype The Gym.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Our Facilities</h2>
          <GalleryGrid images={galleryImages} />
        </div>
      </div>
    </div>
  );
}
