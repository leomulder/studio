import { FileText, BookCheck, AudioLines, Smartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const features = [
  'Contenu écrit, organisé par livres et chapitres',
  'Explications directes et accessibles',
  'Audios complémentaires pour approfondir la compréhension',
  'Accès numérique sur plusieurs appareils',
];

const featureIcons: LucideIcon[] = [
    FileText,
    BookCheck,
    AudioLines,
    Smartphone,
];


export function Contents() {
  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl">
            Ce que contient le programme
          </h2>
        </div>
        <div className="mt-16 max-w-xl mx-auto">
            <ul className="space-y-10">
                {features.map((feature, index) => {
                    const Icon = featureIcons[index];
                    return (
                        <li key={feature} className="flex items-start gap-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background border-2 border-primary/10 text-primary shrink-0">
                                {Icon && <Icon className="h-6 w-6" />}
                            </div>
                            <div>
                                <p className="text-lg font-medium text-foreground leading-snug">{feature}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className="mt-20 text-center font-semibold text-muted-foreground text-lg space-y-2">
          <p>Sans excès de langage religieux.</p>
          <p>Sans discours interminables.</p>
          <p>Sans interprétations vagues.</p>
        </div>
      </div>
    </section>
  );
}
