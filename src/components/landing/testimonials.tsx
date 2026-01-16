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
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-transparent border-0 shadow-none">
              <CardContent className="p-0">
                <blockquote className="text-lg text-foreground italic text-center max-w-prose mx-auto">
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
