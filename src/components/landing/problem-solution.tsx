import { XCircle, CheckCircle2 } from 'lucide-react';

const problems = [
  'Lecture fragmentée',
  'Manque de contexte',
  'Trop d’interprétations',
  'Difficulté à suivre le fil',
];

const solutions = [
  'Texte + contexte historique',
  'Lecture verset par verset',
  'Questions sobres pour guider',
  'Fil conducteur clair',
];

export function ProblemSolution() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="rounded-lg bg-card p-8">
            <h3 className="font-headline text-2xl text-center">Le constat</h3>
            <ul className="mt-6 space-y-4">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start">
                  <XCircle className="h-5 w-5 mr-3 mt-1 shrink-0 text-destructive/60" />
                  <span className="text-muted-foreground">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-card p-8">
            <h3 className="font-headline text-2xl text-center">Le cadre proposé</h3>
            <ul className="mt-6 space-y-4">
              {solutions.map((solution) => (
                <li key={solution} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-3 mt-1 shrink-0 text-primary" />
                  <span className="text-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="font-headline text-xl md:text-2xl max-w-2xl mx-auto">
            Un cadre simple pour lire la Bible avec cohérence.
          </p>
        </div>
      </div>
    </section>
  );
}
