import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const principles = [
  'La cohérence textuelle',
  'L’organisation historique',
  'La clarté conceptuelle',
  'Des explications accessibles, sans simplification excessive',
];

export function Authority() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl leading-tight text-foreground">
            Une approche sérieuse, pédagogique et structurée
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="max-w-prose">
            <p className="text-lg text-muted-foreground">
              Ce contenu repose sur une approche de lecture claire et progressive des textes bibliques, en mettant l’accent sur :
            </p>
            <ul className="mt-8 space-y-5">
              {principles.map((item) => (
                <li key={item} className="flex items-start">
                  <Check className="h-5 w-5 text-primary/50 mr-3 mt-1 shrink-0" />
                  <span className="text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg text-muted-foreground">
              L’objectif n’est pas d’imposer une interprétation, mais d’offrir des outils de compréhension, afin que chaque lecteur puisse construire son propre regard à partir du texte.
            </p>
          </div>

          {/* Right Column */}
          <div className="mt-8 md:mt-0">
            <Card className="bg-secondary/50 border rounded-lg">
              <CardContent className="p-10">
                <blockquote className="text-lg text-foreground italic max-w-prose">
                  « Inspiré de méthodes académiques d’analyse et de lecture des textes, ce contenu suit une progression logique qui respecte le contexte, la chronologie des récits et l’intention originale des écrits. »
                </blockquote>
                <div className="mt-8 text-left space-y-2">
                  <p className="text-base text-muted-foreground">Sans rhétorique.</p>
                  <p className="text-base text-muted-foreground">Sans exagération.</p>
                  <p className="text-base text-muted-foreground">Sans raccourci.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-32 text-center">
            <p className="font-headline text-2xl md:text-3xl max-w-prose mx-auto text-foreground">
              Comprendre un texte exige une méthode — pas seulement de la bonne volonté.
            </p>
        </div>
      </div>
    </section>
  );
}
