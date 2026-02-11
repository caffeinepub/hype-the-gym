import { usePageMeta } from '@/hooks/usePageMeta';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqItems } from '@/content/faq';

export default function FaqPage() {
  usePageMeta({
    title: 'FAQ',
    description: 'Frequently asked questions about Hype The Gym memberships, programs, facilities, and services. Get answers to common questions.',
  });

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black mb-6 md:text-5xl lg:text-6xl">
            Frequently Asked <span className="bg-gradient-to-r from-[oklch(0.65_0.25_25)] to-[oklch(0.60_0.22_15)] bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto md:text-xl">
            Got questions? We've got answers. Find everything you need to know about joining Hype The Gym.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/40 rounded-lg px-6 data-[state=open]:border-[oklch(0.65_0.25_25)]/40"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold text-lg">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <p className="text-sm text-muted-foreground">
            Contact us at{' '}
            <a href="mailto:info@hypethegym.com" className="text-[oklch(0.65_0.25_25)] hover:underline">
              info@hypethegym.com
            </a>
            {' '}or call{' '}
            <a href="tel:+919XXXXXXXXX" className="text-[oklch(0.65_0.25_25)] hover:underline">
              +91 9XXXXXXXXX
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
