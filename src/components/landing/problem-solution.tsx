import { XCircle, CheckCircle2, FileText, BarChart3, BookCheck, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const problems = [
  'Ne comprennent pas le contexte historique',
  'Ne perçoivent pas la progression des récits',
  'Confondent personnages, périodes et messages',
  'Dépendent constamment d’explications extérieures',
];

const solutions = [
  { text: 'Des explications claires', icon: FileText },
  { text: 'Une organisation progressive', icon: BarChart3 },
  { text: 'Une analyse verset par verset', icon: BookCheck },
  { text: 'Une méthode favorisant une lecture autonome', icon: Lightbulb },
];

export function ProblemSolution() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/50">
      <div className="container">
        {/* Problem */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl">
            Lire la Bible n’est pas le problème. La comprendre l’est.
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Beaucoup de personnes lisent les textes bibliques, mais :
          </p>
        </div>
        <div className="mt-12 max-w-md mx-auto">
            <ul className="space-y-4">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start">
                  <XCircle className="h-5 w-5 mr-3 mt-1 shrink-0 text-destructive/80" />
                  <span className="text-base text-muted-foreground">{problem}</span>
                </li>
              ))}
            </ul>
        </div>
        <p className="mt-8 text-center font-semibold text-lg max-w-xl mx-auto">
          Le problème n’est pas un manque de foi — c’est un manque de structure dans la manière d’étudier le texte.
        </p>
        
        {/* Solution */}
        <div className="mt-24 text-center max-w-2xl mx-auto">
           <h3 className="font-headline text-3xl md:text-4xl">Une approche structurée, pas des interprétations dispersées</h3>
           <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Ce contenu a été conçu pour offrir :
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {solutions.map((solution) => (
              <Card key={solution.text} className="bg-background/0 border-0 shadow-none text-center">
                <CardContent className="p-6 flex flex-col items-center justify-start h-full">
                  <solution.icon className="h-8 w-8 text-primary mb-4" />
                  <p className="font-medium text-foreground">{solution.text}</p>
                </CardContent>
              </Card>
            ))}
        </div>
         <p className="mt-8 text-center font-semibold text-lg max-w-xl mx-auto">
            Ici, l’objectif n’est pas de convaincre — mais d’éclairer.
        </p>
      </div>
    </section>
  );
}
