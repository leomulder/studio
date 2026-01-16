import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const benefits = [
  'Une navigation claire entre chapitres et thèmes',
  'De reprendre l’étude exactement là où vous l’avez laissée',
  'D’étudier à tout moment, sans organisation complexe',
  'De conserver l’ensemble du contenu en un seul endroit',
];

export function Preview() {
  const previewImage = PlaceHolderImages.find((img) => img.id === 'preview-1');

  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-prose">
            <h2 className="text-3xl md:text-4xl">
              Un outil d’étude conçu pour le quotidien
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
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
          </div>
          <div className="flex justify-center">
            {previewImage && (
              <Image
                src={previewImage.imageUrl}
                alt={previewImage.description}
                width={1200}
                height={800}
                className="rounded-lg shadow-xl ring-1 ring-black/5 w-full h-auto"
                data-ai-hint={previewImage.imageHint}
              />
            )}
          </div>
        </div>
        <p className="font-headline text-xl md:text-2xl text-center mt-24 max-w-full">
            Moins de distraction. Plus de compréhension.
        </p>
      </div>
    </section>
  );
}
