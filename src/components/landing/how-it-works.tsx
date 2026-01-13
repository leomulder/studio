import { Zap, BookOpen, Pencil, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  icon: LucideIcon;
  name: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: Zap,
    name: '1. Accès immédiat',
    description: 'Recevez vos accès et commencez à lire en quelques minutes.',
  },
  {
    icon: BookOpen,
    name: '2. Lecture guidée',
    description: 'Suivez le fil du texte avec des explications claires.',
  },
  {
    icon: Pencil,
    name: '3. Notes personnelles',
    description: 'Notez vos pensées et questions au fil de votre lecture.',
  },
  {
    icon: Clock,
    name: '4. Avancez à votre rythme',
    description: 'Sans pression, selon votre emploi du temps.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl">
            Comment ça marche ?
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Un processus simple en 4 étapes pour une expérience fluide.
          </p>
        </div>
        <div className="relative mt-12">
          <div className="absolute left-1/2 top-4 hidden h-full w-px bg-border md:block" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.name} className="relative flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card border-2 border-primary text-primary">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold">{step.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-12 text-center text-muted-foreground">
          Une séance prend 10 à 20 minutes, selon vous.
        </p>
      </div>
    </section>
  );
}
