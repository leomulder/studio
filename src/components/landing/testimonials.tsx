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
      <div className="container px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-transparent shadow-none">
              <CardContent className="p-6">
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
