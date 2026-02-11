import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '₹1,999',
    period: '/month',
    description: 'Perfect for getting started',
    features: [
      'Access to gym equipment',
      'Locker facilities',
      'Basic fitness assessment',
      'Open gym hours',
    ],
  },
  {
    name: 'Standard',
    price: '₹3,999',
    period: '/month',
    description: 'Most popular choice',
    features: [
      'Everything in Basic',
      'Group fitness classes',
      'Nutrition consultation',
      'Progress tracking',
      'Guest passes (2/month)',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '₹6,999',
    period: '/month',
    description: 'Ultimate fitness experience',
    features: [
      'Everything in Standard',
      'Personal training sessions',
      'Custom meal plans',
      'Priority class booking',
      'Unlimited guest passes',
      'Recovery & spa access',
    ],
  },
];

export default function MembershipPlansPreview() {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">Membership Plans</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your goals and budget. All plans include access to our world-class facilities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative ${plan.popular ? 'border-[oklch(0.65_0.25_25)] shadow-lg' : 'border-border/40'}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[oklch(0.65_0.25_25)] to-[oklch(0.60_0.22_15)] text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[oklch(0.65_0.25_25)] shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-[oklch(0.65_0.25_25)] to-[oklch(0.60_0.22_15)] hover:opacity-90' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => navigate({ to: '/membership' })}
                >
                  Join Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
