import { XCircle, CheckCircle2 } from 'lucide-react';

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
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl">
                Lire la Bible n’est pas le problème. La comprendre l’est.
            </h2>
             <p className="mt-4 text-base text-muted-foreground md:text-lg max-w-2xl mx-auto">
                Beaucoup de personnes lisent les textes bibliques, mais...
            </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div className="rounded-lg bg-card p-6 sm:p-8">
            <ul className="space-y-4">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start">
                  <XCircle className="h-5 w-5 mr-3 mt-1 shrink-0 text-destructive/60" />
                  <span className="text-base text-muted-foreground">{problem}</span>
                </li>
              ))}
            </ul>
             <p className="mt-6 text-center font-semibold text-lg">
                Le problème n’est pas un manque de foi — c’est un manque de structure.
            </p>
          </div>
          <div className="rounded-lg bg-primary/10 border-2 border-primary/30 p-6 sm:p-8">
             <h3 className="font-headline text-2xl text-center mb-6">Une approche structurée, pas des interprétations dispersées</h3>
            <ul className="space-y-4">
              {solutions.map((solution) => (
                <li key={solution} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-3 mt-1 shrink-0 text-primary" />
                  <span className="text-base text-foreground font-medium">{solution}</span>
                </li>
              ))}
            </ul>
             <p className="mt-6 text-center font-semibold text-lg">
                Ici, l’objectif n’est pas de convaincre — mais d’éclairer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
