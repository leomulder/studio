import { CheckCircle2 } from 'lucide-react';

const features = [
  'Contenu écrit, organisé par livres et chapitres',
  'Explications directes et accessibles',
  'Audios complémentaires pour approfondir la compréhension',
  'Accès numérique sur plusieurs appareils',
];

export function Contents() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl">
            Ce que contient le programme
          </h2>
        </div>
        <div className="mt-12">
           <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start text-lg md:text-xl">
                  <CheckCircle2 className="h-6 w-6 mr-3 mt-1 shrink-0 text-primary" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
        </div>
        <div className="mt-12 text-center font-semibold text-muted-foreground text-lg">
          <p>Sans excès de langage religieux.</p>
          <p>Sans discours interminables.</p>
          <p>Sans interprétations vagues.</p>
        </div>
      </div>
    </section>
  );
}
