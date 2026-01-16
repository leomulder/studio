import { FileText, BarChart3, BookCheck, Lightbulb } from 'lucide-react';
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
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="container px-4">
        {/* Problem */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl">
            Lire la Bible n’est pas le problème. La comprendre l’est.
          </h2>
          <p className="mt-6 text-muted-foreground md:text-lg mx-auto">
            Beaucoup de personnes lisent les textes bibliques, mais :
          </p>
        </div>
        <div className="mt-10 max-w-md mx-auto">
            <ul className="space-y-4">
              {problems.map((problem) => (
                <li key={problem} className="text-center text-muted-foreground text-lg">
                  {problem}
                </li>
              ))}
            </ul>
        </div>
        <p className="mt-12 text-center font-semibold text-xl max-w-xl mx-auto">
          Le problème n’est pas un manque de foi — c’est un manque de structure dans la manière d’étudier le texte.
        </p>
        
        {/* Solution */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
           <h3 className="text-3xl md:text-4xl">Une approche structurée, pas des interprétations dispersées</h3>
           <p className="mt-6 text-muted-foreground md:text-lg mx-auto">
            Ce contenu a été conçu pour offrir :
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {solutions.map((solution) => (
              <Card key={solution.text} className="bg-transparent border-0 shadow-none text-center">
                <CardContent className="p-4 flex flex-col items-center justify-start h-full">
                  <solution.icon className="size-7 text-primary/70 mb-4" />
                  <p className="font-medium text-foreground text-lg">{solution.text}</p>
                </CardContent>
              </Card>
            ))}
        </div>
         <p className="mt-12 text-center font-semibold text-xl max-w-xl mx-auto">
            Ici, l’objectif n’est pas de convaincre — mais d’éclairer.
        </p>
      </div>
    </section>
  );
}
