import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    quote:
      'Je comprends enfin les textes sans devoir chercher des explications à chaque instant.',
    author: 'Anne L.',
    location: 'Lyon',
    imageId: 'testimonial-1',
  },
  {
    quote: 'Le contenu est clair, bien structuré et facile à suivre.',
    author: 'Julien M.',
    location: 'Paris',
    imageId: 'testimonial-2',
  },
  {
    quote: 'Enfin une approche biblique directe, sans surcharge interprétative.',
    author: 'Claire D.',
    location: 'Lille',
    imageId: 'testimonial-3',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl text-foreground">
            Ce qu'en disent les lecteurs
          </h2>
          <div className="mt-4 h-1 w-24 bg-primary/20 mx-auto"></div>
          <p className="mt-8 text-lg text-muted-foreground">
            Des retours authentiques de personnes qui utilisent l'étude.
          </p>
        </div>

        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === testimonial.imageId
            );
            return (
              <Card
                key={testimonial.author}
                className="bg-background shadow-sm border-border/50 flex flex-col"
              >
                <CardContent className="p-8 flex flex-col flex-1">
                  <blockquote className="text-foreground text-base leading-relaxed flex-1 italic">
                    “{testimonial.quote}”
                  </blockquote>
                  <footer className="mt-8 pt-6 border-t border-border/50 flex items-center gap-4">
                    {image && (
                      <Avatar>
                        <AvatarImage
                          src={image.imageUrl}
                          alt={testimonial.author}
                        />
                        <AvatarFallback>
                          {testimonial.author.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </footer>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}