import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-main-image');
  
  return (
    <section className="flex items-center min-h-[80vh] py-24 sm:py-32">
      <div className="container px-4">
        <div className="max-w-[680px] text-center mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Comprendre les Patriarches et les Prophètes
            <span className="block text-primary/80 mt-2">avec clarté, contexte et logique — verset par verset.</span>
          </h1>

          {heroImage && (
            <div className="mt-12 flex justify-center">
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={500}
                    height={500}
                    className="rounded-lg shadow-lg"
                    data-ai-hint={heroImage.imageHint}
                    priority
                />
            </div>
          )}

          <p className="mt-12 text-lg leading-8 text-muted-foreground sm:text-xl max-w-prose mx-auto">
            Un contenu structuré pour celles et ceux qui souhaitent comprendre les textes bibliques, sans interprétations confuses, sans dépendance aux longues vidéos et sans langage dogmatique.
          </p>

          <div className="mt-16">
            <a href="#tarifs">
              <Button size="lg" className="px-10 py-7 text-base sm:text-lg">Découvrir le contenu</Button>
            </a>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">Méthode structurée • Lecture progressive • Accès via application</p>
        </div>
      </div>
    </section>
  );
}
