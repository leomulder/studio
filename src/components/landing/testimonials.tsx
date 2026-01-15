import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Anne',
    details: '34, Lyon',
    quote: 'Je sais enfin où je suis dans le récit. C’est la première fois que je ne me sens pas perdue après la Genèse.',
    imageUrl: 'https://i.postimg.cc/4yfJkNWB/Captura-de-Tela-2026-01-12-a-s-22-38-09.png',
  },
  {
    name: 'Julien',
    details: '45, Paris',
    quote: 'La possibilité de lire sans pression, à mon rythme, change tout. Pas de culpabilité si je saute une semaine.',
    imageUrl: 'https://i.postimg.cc/KYtF1gVR/Captura-de-Tela-2026-01-12-a-s-22-39-17.png',
  },
  {
    name: 'Claire',
    details: '28, Lille',
    quote: 'J’apprécie la sobriété. Pas de vidéos, pas de longs sermons, juste le texte et de quoi le comprendre. Parfait pour moi.',
    imageUrl: 'https://i.postimg.cc/dtXKnBcg/Captura-de-Tela-2026-01-12-a-s-22-40-20.png',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl">
            Ce qu’en disent les lecteurs
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Des retours authentiques de personnes qui utilisent l'étude.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardContent className="p-6">
                <blockquote className="text-base text-muted-foreground">
                  “{testimonial.quote}”
                </blockquote>
                <div className="mt-4 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.details}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
