import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BadgeCheck, Rocket, ShieldCheck } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-mockup');

  return (
    <section className="py-16 sm:py-24">
      <div className="container text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Patriarches et Prophètes
          <span className="block text-primary">expliqués verset par verset</span>
        </h1>

        {heroImage && (
          <div className="mt-10 flex justify-center">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={1000}
              height={562}
              className="rounded-lg shadow-2xl w-full h-auto max-w-xl"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          </div>
        )}

        <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
          Explorez, verset par verset, plus de 2 300 passages bibliques expliqués avec une clarté rare.
          Redécouvrez le sens des récits des Patriarches, la parole des Prophètes, et les vérités durables transmises au peuple de Dieu.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#tarifs">
            <Button size="lg" className="px-8 py-6 text-lg sm:text-xl">Voir les options d’accès</Button>
          </a>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span>Paiement unique</span>
          </div>
          <div className="flex items-center gap-2">
            <Rocket className="h-4 w-4 text-primary" />
            <span>Accès immédiat</span>
          </div>
          <div className="flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 text-primary" />
            <span>Sans abonnement</span>
          </div>
        </div>
      </div>
    </section>
  );
}
