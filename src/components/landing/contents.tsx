import { Card, CardContent } from '@/components/ui/card';

const features = [
  'Contenu écrit, organisé par livres et chapitres',
  'Explications directes et accessibles',
  'Audios complémentaires pour approfondir la compréhension',
  'Accès numérique sur plusieurs appareils',
];

export function Contents() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl">
            Ce que contient le programme
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Card key={feature} className="border-2">
              <CardContent className="p-6 flex items-center justify-center h-full">
                <p className="text-lg font-medium text-center text-foreground">{feature}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center font-semibold text-muted-foreground text-lg">
          <p>Sans excès de langage religieux.</p>
          <p>Sans discours interminables.</p>
          <p>Sans interprétations vagues.</p>
        </div>
      </div>
    </section>
  );
}
