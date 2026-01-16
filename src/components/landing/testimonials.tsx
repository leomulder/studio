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
    <section className="py-16 sm:py-24 bg-secondary/50">
      <div className="container">
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="p-8 h-full flex items-center justify-center">
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
