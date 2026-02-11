import { useNavigate } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface ProgramCardProps {
  program: {
    icon: LucideIcon;
    title: string;
    description: string;
    benefits: string[];
  };
}

export default function ProgramCard({ program }: ProgramCardProps) {
  const navigate = useNavigate();

  return (
    <Card className="border-border/40 hover:border-[oklch(0.65_0.25_25)]/40 transition-colors">
      <CardHeader>
        <div className="rounded-full bg-gradient-to-br from-[oklch(0.65_0.25_25)]/10 to-[oklch(0.50_0.20_145)]/10 w-14 h-14 flex items-center justify-center mb-4">
          <program.icon className="h-7 w-7 text-[oklch(0.65_0.25_25)]" />
        </div>
        <CardTitle className="text-2xl">{program.title}</CardTitle>
        <CardDescription className="text-base">{program.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-6">
          {program.benefits.map((benefit) => (
            <li key={benefit} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-[oklch(0.65_0.25_25)] mt-1">•</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <Button
            onClick={() => navigate({ to: '/membership' })}
            className="flex-1 bg-gradient-to-r from-[oklch(0.65_0.25_25)] to-[oklch(0.60_0.22_15)] hover:opacity-90"
          >
            Enroll Now
          </Button>
          <Button
            onClick={() => navigate({ to: '/contact' })}
            variant="outline"
            className="flex-1"
          >
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
