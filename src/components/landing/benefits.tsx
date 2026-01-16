import { CheckCircle2 } from 'lucide-react';

const outcomes = [
  'Lire les textes bibliques avec plus d’autonomie',
  'Comprendre la chronologie et la logique des récits',
  'Identifier clairement le rôle des patriarches et des prophètes',
  'Étudier sans dépendre constamment de vidéos ou de tiers',
];

export function Benefits() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl">
            Après avoir étudié ce contenu, vous serez capable de :
          </h2>
        </div>
        <div className="mt-12">
          <ul className="space-y-4">
            {outcomes.map((outcome, index) => (
               <li key={index} className="flex items-start text-lg md:text-xl">
                  <CheckCircle2 className="h-6 w-6 mr-3 mt-1 shrink-0 text-primary" />
                  <span className="text-foreground">{outcome}</span>
                </li>
            ))}
          </ul>
        </div>
        <p className="mt-12 text-center font-headline text-xl md:text-2xl text-muted-foreground">
          Une transformation intellectuelle, rationnelle et durable.
        </p>
      </div>
    </section>
  );
}
