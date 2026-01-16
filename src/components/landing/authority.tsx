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
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl leading-tight text-foreground">
            Une approche sérieuse, pédagogique et structurée
          </h2>
          <div className="mt-4 h-1 w-24 bg-primary/20 mx-auto"></div>
          <p className="mt-8 text-lg text-muted-foreground">
            Ce contenu repose sur une approche de lecture claire et progressive des textes bibliques, en mettant l’accent sur :
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {principles.map((item) => (
                <Card key={item} className="bg-secondary/50 border-none rounded-lg">
                    <CardContent className="p-8 flex items-center justify-center h-full">
                        <p className="text-lg font-medium text-center text-foreground">{item}</p>
                    </CardContent>
                </Card>
            ))}
        </div>

        <p className="mt-16 text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            L’objectif n’est pas d’imposer une interprétation, mais d’offrir des outils de compréhension, afin que chaque lecteur puisse construire son propre regard à partir du texte.
        </p>

        <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-background rounded-lg border">
              <CardContent className="p-8 sm:p-10">
                <blockquote className="text-lg text-foreground italic max-w-prose text-center mx-auto">
                  « Inspiré de méthodes académiques d’analyse et de lecture des textes, ce contenu suit une progression logique qui respecte le contexte, la chronologie des récits et l’intention originale des écrits. »
                </blockquote>
                <div className="mt-8 text-center space-y-1 text-muted-foreground/80">
                  <p>Sans rhétorique.</p>
                  <p>Sans exagération.</p>
                  <p>Sans raccourci.</p>
                </div>
              </CardContent>
            </Card>
        </div>
        
        <div className="mt-20 text-center">
            <p className="font-headline text-2xl md:text-3xl max-w-prose mx-auto text-foreground">
              Comprendre un texte exige une méthode — pas seulement de la bonne volonté.
            </p>
        </div>
      </div>
    </section>
  );
}
