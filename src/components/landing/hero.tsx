import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="flex items-center min-h-[90vh] py-24 sm:py-32">
      <div className="container">
        <div className="max-w-[680px] text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Comprendre les Patriarches et les Prophètes
            <span className="block text-primary/80 mt-2">avec clarté, contexte et logique — verset par verset.</span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-muted-foreground sm:text-xl max-w-prose">
            Un contenu structuré pour celles et ceux qui souhaitent comprendre les textes bibliques, sans interprétations confuses, sans dépendance aux longues vidéos et sans langage dogmatique.
          </p>

          <div className="mt-12">
            <a href="#tarifs">
              <Button size="lg" className="px-10 py-7 text-base sm:text-lg">Découvrir le contenu</Button>
            </a>
          </div>
          
          <p className="mt-4 text-sm text-muted-foreground">Méthode structurée • Lecture progressive • Accès via application</p>
        </div>
      </div>
    </section>
  );
}
