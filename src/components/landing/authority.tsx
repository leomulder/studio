import { CheckCircle2 } from 'lucide-react';

const emphasisPoints = [
  'La cohérence textuelle',
  'L’organisation historique',
  'La clarté conceptuelle',
  'Des explications accessibles, sans simplification excessive',
];

export function Authority() {
  return (
    <section className="bg-secondary py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl leading-tight">
            Une approche sérieuse, pédagogique et structurée
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-base md:text-lg text-muted-foreground">
              Ce contenu repose sur une approche de lecture claire et progressive des textes bibliques, en mettant l’accent sur :
            </p>
            <ul className="mt-6 space-y-4">
              {emphasisPoints.map((point) => (
                <li key={point} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-3 mt-1 shrink-0 text-primary" />
                  <span className="text-base text-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base md:text-lg text-muted-foreground">
              L’objectif n’est pas d’imposer une interprétation, mais d’offrir des outils de compréhension, afin que chaque lecteur puisse construire son propre regard à partir du texte.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <p className="text-base text-foreground italic">
              Inspiré de méthodes académiques d’analyse et de lecture des textes, ce contenu suit une progression logique qui respecte le contexte, la chronologie des récits et l’intention originale des écrits.
            </p>
            <div className="mt-4 text-center font-semibold text-muted-foreground">
              <p>Sans rhétorique.</p>
              <p>Sans exagération.</p>
              <p>Sans raccourci.</p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
            <p className="font-headline text-xl md:text-2xl max-w-3xl mx-auto">
              Comprendre un texte exige une méthode — pas seulement de la bonne volonté.
            </p>
        </div>
      </div>
    </section>
  );
}
