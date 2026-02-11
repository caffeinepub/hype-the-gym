import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TrainerCardProps {
  trainer: {
    name: string;
    role: string;
    specialty: string;
    certifications: string[];
    image: string;
  };
}

export default function TrainerCard({ trainer }: TrainerCardProps) {
  return (
    <Card className="border-border/40 hover:border-[oklch(0.65_0.25_25)]/40 transition-colors overflow-hidden">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <CardHeader>
        <h3 className="font-bold text-xl">{trainer.name}</h3>
        <p className="text-sm text-[oklch(0.65_0.25_25)]">{trainer.role}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">{trainer.specialty}</p>
        <div className="flex flex-wrap gap-2">
          {trainer.certifications.map((cert) => (
            <Badge key={cert} variant="secondary" className="text-xs">
              {cert}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
