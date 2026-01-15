import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function Preview() {
  const previewImages = [
    PlaceHolderImages.find((img) => img.id === 'preview-1'),
    PlaceHolderImages.find((img) => img.id === 'preview-2'),
    PlaceHolderImages.find((img) => img.id === 'preview-3'),
  ].filter(Boolean);

  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl">
            Aperçu d’une séance
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Voici exactement ce que vous verrez. Simple, clair et sans distraction.
          </p>
        </div>
        <div className="mt-12 flow-root">
          <div className="mx-auto max-w-3xl">
            <Carousel
              opts={{
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {previewImages.map((image) => (
                  image && (
                    <CarouselItem key={image.id}>
                      <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={1200}
                          height={800}
                          className="rounded-md shadow-2xl ring-1 ring-gray-900/10 w-full h-auto"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    </CarouselItem>
                  )
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
