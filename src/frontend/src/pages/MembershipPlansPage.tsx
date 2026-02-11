import { usePageMeta } from '@/hooks/usePageMeta';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import OnlineMembershipForm from '@/components/forms/OnlineMembershipForm';

const plans = [
  {
    name: 'Basic',
    price: '₹1,999',
    period: '/month',
    description: 'Perfect for getting started on your fitness journey',
    features: [
      'Access to all gym equipment',
      'Locker and shower facilities',
      'Basic fitness assessment',
      'Open gym hours (5 AM - 11 PM)',
      'Free WiFi',
    ],
  },
  {
    name: 'Standard',
    price: '₹3,999',
    period: '/month',
    description: 'Most popular choice for serious fitness enthusiasts',
    features: [
      'Everything in Basic',
      'Unlimited group fitness classes',
      'Monthly nutrition consultation',
      'Progress tracking and assessments',
      'Guest passes (2 per month)',
      'Priority equipment access',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '₹6,999',
    period: '/month',
    description: 'Ultimate fitness experience with personalized support',
    features: [
      'Everything in Standard',
      '4 personal training sessions/month',
      'Custom meal plans and nutrition coaching',
      'Priority class booking',
      'Unlimited guest passes',
      'Recovery & spa access',
      'Supplement discounts',
      'Free merchandise',
    ],
  },
];

export default function MembershipPlansPage() {
  usePageMeta({
    title: 'Membership Plans',
    description: 'Choose the perfect membership plan for your fitness goals. Flexible options with world-class facilities, expert training, and comprehensive support at Hype The Gym.',
  });

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black mb-6 md:text-5xl lg:text-6xl">
            Membership <span className="bg-gradient-to-r from-[oklch(0.65_0.25_25)] to-[oklch(0.60_0.22_15)] bg-clip-text text-transparent">Plans</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto md:text-xl">
            Choose the plan that fits your goals and budget. All plans include access to our world-class facilities and supportive community.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative ${plan.popular ? 'border-[oklch(0.65_0.25_25)] shadow-xl scale-105' : 'border-border/40'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[oklch(0.65_0.25_25)] to-[oklch(0.60_0.22_15)] text-white text-sm font-bold px-4 py-1.5 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-muted-foreground text-lg">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[oklch(0.65_0.25_25)] shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Membership Form */}
        <div id="membership-form" className="max-w-2xl mx-auto">
          <OnlineMembershipForm />
        </div>
      </div>
    </div>
  );
}
