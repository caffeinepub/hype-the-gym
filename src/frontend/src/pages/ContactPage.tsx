import { usePageMeta } from '@/hooks/usePageMeta';
import MapAndContactSection from '@/components/contact/MapAndContactSection';
import FreeTrialBookingForm from '@/components/forms/FreeTrialBookingForm';

export default function ContactPage() {
  usePageMeta({
    title: 'Contact Us',
    description: 'Get in touch with Hype The Gym. Book your free trial, ask questions, or visit us today. We\'re here to help you start your fitness journey.',
  });

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black mb-6 md:text-5xl lg:text-6xl">
            Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto md:text-xl">
            Ready to start your transformation? Book a free trial, ask us anything, or visit our gym today.
          </p>
        </div>

        {/* Free Trial Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <FreeTrialBookingForm />
        </div>

        {/* Map and Contact Details */}
        <MapAndContactSection />
      </div>
    </div>
  );
}
