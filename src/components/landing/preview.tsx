import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2, XCircle } from 'lucide-react';

const benefits = [
  'Une navigation claire entre chapitres et thèmes',
  'De reprendre l’étude exactement là où vous l’avez laissée',
  'D’étudier à tout moment, sans organisation complexe',
  'De conserver l’ensemble du contenu en un seul endroit',
];

const painPoints = [
  'Des PDF trop longs',
  'Des vidéos peu efficaces',
  'Des plateformes complexes',
];

export function Preview() {
  const previewImage = PlaceHolderImages.find((img) => img.id === 'preview-1');

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl">
            Un outil d’étude conçu pour le quotidien
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Plutôt que des fichiers dispersés ou de longues vidéos, le contenu est organisé dans une application simple et fonctionnelle.
          </p>
        </div>
        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Permettant :</h3>
              <ul className="space-y-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-3 mt-1 shrink-0 text-primary" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contrairement à :</h3>
              <ul className="space-y-2">
                {painPoints.map((point) => (
                  <li key={point} className="flex items-start">
                    <XCircle className="h-5 w-5 mr-3 mt-1 shrink-0 text-destructive/60" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
             <p className="font-headline text-xl md:text-2xl text-center pt-4">
              Moins de distraction. Plus de compréhension.
            </p>
          </div>
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            {previewImage && (
              <Image
                src={previewImage.imageUrl}
                alt={previewImage.description}
                width={1200}
                height={800}
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10 w-full h-auto"
                data-ai-hint={previewImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
