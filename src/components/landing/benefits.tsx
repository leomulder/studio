import {
  BookOpenCheck,
  BookUser,
  Hourglass,
  Link as LinkIcon,
  Sparkles,
  PenSquare,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  text: string;
}

const benefits: Benefit[] = [
  { icon: BookOpenCheck, text: 'Comprendre le fil du récit biblique' },
  { icon: BookUser, text: 'Lire sans dépendre de sermons ou vidéos' },
  { icon: Hourglass, text: 'Avancer à votre rythme, sans culpabilité' },
  { icon: LinkIcon, text: 'Relier les textes entre eux' },
  { icon: Sparkles, text: 'Gagner en clarté, sans jargon' },
  { icon: PenSquare, text: 'Laisser une trace écrite de votre lecture' },
];

export function Benefits() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl">
            Ce que cette étude apporte
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Des bénéfices concrets pour une lecture renouvelée.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <a href="#tarifs" key={index} className="group">
              <Card className="h-full transition-all duration-300 group-hover:bg-accent group-hover:shadow-lg">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <benefit.icon className="h-10 w-10 text-primary" />
                  <p className="mt-4 font-medium">{benefit.text}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
