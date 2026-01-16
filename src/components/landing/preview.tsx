import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const benefits = [
  'Une navigation claire entre chapitres et thèmes',
  'De reprendre l’étude exactement là où vous l’avez laissée',
  'D’étudier à tout moment, sans organisation complexe',
  'De conserver l’ensemble du contenu en un seul endroit',
];

const contrastPoints = [
  'Des PDF trop longs',
  'Des vidéos peu efficaces',
  'Des plateformes complexes',
]

export function Preview() {
  const previewImage = PlaceHolderImages.find((img) => img.id === 'preview-1');

  return (
    <section className="py-24 sm:py-32">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="max-w-prose">
            <h2 className="font-headline text-3xl md:text-4xl">
              Un outil d’étude conçu pour le quotidien
            </h2>
            <div className="mt-4 h-1 w-24 bg-primary/20"></div>
            <p className="mt-8 text-lg text-muted-foreground">
              Plutôt que des fichiers dispersés ou de longues vidéos, le contenu est organisé dans une application simple et fonctionnelle, permettant :
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start text-lg">
                  <span className="text-primary mr-3 mt-1">›</span>
                  <span className="text-foreground -ml-1">{benefit}</span>
                </li>
              ))}
            </ul>
             <p className="mt-8 text-lg text-muted-foreground">
              Contrairement à :
            </p>
             <ul className="mt-4 space-y-2">
              {contrastPoints.map((point) => (
                <li key={point} className="flex items-start text-lg text-muted-foreground/80">
                   <span className="text-destructive/50 mr-3 mt-1">×</span>
                   <span className="-ml-1">{point}</span>
                </li>
              ))}
            </ul>

          </div>
          <div className="flex justify-center mt-12 lg:mt-0">
            {previewImage && (
              <div className="p-2 bg-gray-100 rounded-lg">
                <Image
                  src={previewImage.imageUrl}
                  alt={previewImage.description}
                  width={1200}
                  height={800}
                  className="rounded-md border w-full h-auto"
                  data-ai-hint={previewImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
        <p className="font-headline text-xl md:text-2xl text-center mt-32">
            Moins de distraction. Plus de compréhension.
        </p>
      </div>
    </section>
  );
}
