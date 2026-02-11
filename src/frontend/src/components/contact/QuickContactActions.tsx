import { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { businessInfo } from '@/content/business';

export default function QuickContactActions() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <TooltipProvider>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setIsVisible(false)}
          className="ml-auto h-8 w-8 rounded-full bg-muted/80 hover:bg-muted"
        >
          <X className="h-4 w-4" />
        </Button>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              asChild
              className="h-14 w-14 rounded-full bg-gradient-to-br from-[oklch(0.50_0.20_145)] to-[oklch(0.45_0.18_200)] shadow-lg hover:opacity-90"
            >
              <a href={businessInfo.whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-6 w-6" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Chat on WhatsApp</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              asChild
              className="h-14 w-14 rounded-full bg-gradient-to-br from-[oklch(0.65_0.25_25)] to-[oklch(0.60_0.22_15)] shadow-lg hover:opacity-90"
            >
              <a href={businessInfo.telLink}>
                <Phone className="h-6 w-6" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Call Now</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
