import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-mockup');

  return (
    <section className="py-16 sm:py-24">
      <div className="container text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Patriarches et Prophètes
          <span className="block text-primary">expliqués verset par verset</span>
        </h1>

        {heroImage && (
          <div className="mt-12">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={1200}
              height={675}
              className="rounded-lg shadow-2xl w-full h-auto"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          </div>
        )}

        <p className="mt-6 max-w-2xl mx-auto text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          Explorez, verset par verset, plus de 2 300 passages bibliques expliqués avec une clarté rare.
          Redécouvrez le sens des récits des Patriarches, la parole des Prophètes, et les vérités durables transmises au peuple de Dieu.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#tarifs">
            <Button size="lg">Voir les options d’accès</Button>
          </a>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Paiement unique • Accès immédiat • Sans abonnement
        </p>
      </div>
    </section>
  );
}
