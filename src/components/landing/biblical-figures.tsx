import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const figures = [
  {
    name: 'Abraham',
    description: 'Promesse et appel',
    imageId: 'abraham',
  },
  {
    name: 'Moïse',
    description: 'Alliance et progression',
    imageId: 'moise',
  },
  {
    name: 'Isaïe',
    description: 'Espérance et vision',
    imageId: 'isaie',
  },
  {
    name: 'Daniel',
    description: 'Fidélité et repères',
    imageId: 'daniel',
  },
];

export function BiblicalFigures() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl">
            Rencontrez les figures bibliques
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Marchez aux côtés des patriarches et des prophètes, et comprenez leur rôle dans le plan divin.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {figures.map((figure) => {
            const image = PlaceHolderImages.find((img) => img.id === figure.imageId);
            return (
              <Card key={figure.name} className="overflow-hidden group">
                <div className="relative h-64 w-full">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={figure.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-headline text-xl">{figure.name}</h3>
                  <p className="text-sm text-muted-foreground">{figure.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
