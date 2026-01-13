import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-mockup');

  return (
    <section className="py-20 sm:py-32">
      <div className="container text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Patriarches et Prophètes
          <span className="block text-primary">expliqués verset par verset</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
          Un cadre clair pour comprendre la Bible, sans se perdre.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#tarifs">
            <Button size="lg">Voir les options d’accès</Button>
          </a>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Paiement unique • Accès immédiat • Sans abonnement
        </p>

        {heroImage && (
          <div className="mt-12 flow-root">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={1000}
                height={700}
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
