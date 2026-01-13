import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Authority() {
  const authorImage = PlaceHolderImages.find((img) => img.id === 'theologian-portrait');

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Sous la direction pédagogique
          </span>
        </div>
        <div className="grid md:grid-cols-2 md:gap-12 items-center">
          <div className="mb-10 md:mb-0">
            {authorImage && (
              <Image
                src={authorImage.imageUrl}
                alt={authorImage.description}
                width={600}
                height={800}
                className="rounded-lg object-cover w-full h-auto max-w-sm mx-auto"
                data-ai-hint={authorImage.imageHint}
              />
            )}
          </div>
          <div>
            <h2 className="font-headline text-3xl md:text-4xl leading-tight">
              Une étude conçue par un enseignant en théologie
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ce parcours a été conçu et structuré par un théologien engagé depuis plus de vingt ans dans l’enseignement biblique. Son travail s’inscrit dans une approche sobre, fidèle au texte, attentive au contexte et pensée pour accompagner le lecteur sans l’influencer.
            </p>
            <p className="mt-6 text-sm italic text-muted-foreground">
              Programme reconnu par une organisation chrétienne francophone.
            </p>
            <div className="mt-8 border-t pt-6">
              <p className="font-semibold">Pr. Jean Dupont</p>
              <p className="text-sm text-muted-foreground">Enseignant en théologie</p>
            </div>
            <div className="mt-8">
              <a href="#tarifs">
                <Button variant="link" className="p-0 h-auto text-primary">
                  Voir les options d’accès
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
