import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: 'Je comprends enfin les textes sans devoir chercher des explications à chaque instant.',
  },
  {
    quote: 'Le contenu est clair, bien structuré et facile à suivre.',
  },
  {
    quote: 'Enfin une approche biblique directe, sans surcharge interprétative.',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl">
            Ce qu’en pensent les lecteurs
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6 h-full flex items-center justify-center">
                <blockquote className="text-lg text-foreground italic text-center">
                  “{testimonial.quote}”
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
