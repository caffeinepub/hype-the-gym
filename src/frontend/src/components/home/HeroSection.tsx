import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/generated/hype-hero-bg.dim_2400x1200.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-6 border border-primary/20">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Premium Fitness Experience</span>
          </div>
          
          <h1 className="text-4xl font-black mb-6 md:text-6xl lg:text-7xl leading-tight">
            Transform Your Body.
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transform Your Life.
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 md:text-xl max-w-2xl">
            Join the ultimate fitness community where champions are made. State-of-the-art equipment, expert trainers, and a high-energy atmosphere designed to push you beyond your limits.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={() => navigate({ to: '/membership' })}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-base font-semibold"
            >
              Join Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate({ to: '/contact' })}
              className="border-primary text-base font-semibold hover:bg-primary/10"
            >
              Book Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
