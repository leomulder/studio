import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Preview() {
  const previewImage = PlaceHolderImages.find((img) => img.id === 'preview-screenshot');

  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl">
            Aperçu d’une séance
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Voici exactement ce que vous verrez. Simple, clair et sans distraction.
          </p>
        </div>
        {previewImage && (
          <div className="mt-12 flow-root">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src={previewImage.imageUrl}
                alt={previewImage.description}
                width={1200}
                height={800}
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                data-ai-hint={previewImage.imageHint}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
