import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Layers, TrendingUp, AppWindow } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-mockup');

  return (
    <section className="py-16 sm:py-24">
      <div className="container text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Comprendre les Patriarches et les Prophètes
          <span className="block text-primary">avec clarté, contexte et logique — verset par verset.</span>
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
          Un contenu structuré pour celles et ceux qui souhaitent comprendre les textes bibliques, sans interprétations confuses, sans dépendance aux longues vidéos et sans langage dogmatique.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#tarifs">
            <Button size="lg" className="px-8 py-6 text-lg sm:text-xl">Découvrir le contenu</Button>
          </a>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
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

        {heroImage && (
          <div className="mt-10 flex justify-center">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={1000}
              height={562}
              className="rounded-lg shadow-2xl w-full h-auto max-w-2xl"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
