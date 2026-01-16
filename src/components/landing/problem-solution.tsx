import { CircleCheck, CircleX } from 'lucide-react';

const problems = [
  'Ne comprennent pas le contexte historique',
  'Ne perçoivent pas la progression des récits',
  'Confondent personnages, périodes et messages',
  'Dépendent constamment d’explications extérieures',
];

const solutions = [
  'Des explications claires',
  'Une organisation progressive',
  'Une analyse verset par verset',
  'Une méthode favorisant une lecture autonome',
];

export function ProblemSolution() {
  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="container px-4">
        {/* Problem */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl">
            Lire la Bible n’est pas le problème. La comprendre l’est.
          </h2>
          <div className="mt-4 h-1 w-24 bg-primary/20 mx-auto"></div>
          <p className="mt-8 text-muted-foreground md:text-lg mx-auto">
            Beaucoup de personnes lisent les textes bibliques, mais&nbsp;:
          </p>
        </div>
        
        <div className="mt-12 max-w-lg mx-auto bg-background/50 p-8 rounded-lg border">
            <ul className="space-y-4">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start">
                  <CircleX className="h-5 w-5 mr-3 mt-1 shrink-0 text-destructive/60" />
                  <span className="text-base text-muted-foreground">{problem}</span>
                </li>
              ))}
            </ul>
        </div>

        <p className="mt-12 text-center font-semibold text-xl max-w-2xl mx-auto">
          Le problème n’est pas un manque de foi — c’est un manque de structure dans la manière d’étudier le texte.
        </p>
        
        {/* Solution */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
           <h2 className="font-headline text-3xl md:text-4xl">Une approche structurée, pas des interprétations dispersées</h2>
           <div className="mt-4 h-1 w-24 bg-primary/20 mx-auto"></div>
           <p className="mt-8 text-muted-foreground md:text-lg mx-auto">
            Ce contenu a été conçu pour offrir&nbsp;:
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto bg-background p-8 rounded-lg border border-primary/20 shadow-sm">
            <ul className="space-y-4">
              {solutions.map((solution) => (
                <li key={solution} className="flex items-start">
                  <CircleCheck className="h-5 w-5 mr-3 mt-1 shrink-0 text-primary" />
                  <span className="text-base text-foreground">{solution}</span>
                </li>
              ))}
            </ul>
        </div>
         <p className="mt-12 text-center font-semibold text-xl max-w-xl mx-auto">
            Ici, l’objectif n’est pas de convaincre — mais d’éclairer.
        </p>
      </div>
    </section>
  );
}
