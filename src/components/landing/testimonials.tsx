import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: 'Je comprends enfin les textes sans devoir chercher des explications à chaque instant.',
    author: 'Anne L.',
    location: 'Lyon',
  },
  {
    quote: 'Le contenu est clair, bien structuré et facile à suivre.',
    author: 'Julien M.',
    location: 'Paris',
  },
  {
    quote: 'Enfin une approche biblique directe, sans surcharge interprétative.',
    author: 'Claire D.',
    location: 'Lille',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl text-foreground">
            Une transformation intellectuelle, rationnelle et durable.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ce qu'en disent les premiers lecteurs :
          </p>
        </div>

        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="bg-background shadow-sm border-border/50 flex flex-col">
              <CardContent className="p-8 flex flex-col flex-1">
                <blockquote className="text-foreground text-base leading-relaxed flex-1 italic">
                  “{testimonial.quote}”
                </blockquote>
                <footer className="mt-8 pt-6 border-t border-border/50">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
