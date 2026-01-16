import { Button } from '@/components/ui/button';
import { Layers, TrendingUp, AppWindow } from 'lucide-react';

export function Hero() {
  return (
    <section className="flex items-center min-h-[80vh] py-16 sm:py-24">
      <div className="container">
        <div className="max-w-2xl text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Comprendre les Patriarches et les Prophètes
            <span className="block text-primary mt-2">avec clarté, contexte et logique — verset par verset.</span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            Un contenu structuré pour celles et ceux qui souhaitent comprendre les textes bibliques, sans interprétations confuses, sans dépendance aux longues vidéos et sans langage dogmatique.
          </p>

          <div className="mt-10 flex items-center gap-x-6">
            <a href="#tarifs">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg sm:text-xl">Découvrir le contenu</Button>
            </a>
          </div>

          <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-primary" />
              <span>Méthode structurée</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span>Lecture progressive</span>
            </div>
            <div className="flex items-center gap-2">
              <AppWindow className="h-4 w-4 text-primary" />
              <span>Accès via application</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
