import { Card, CardContent } from '@/components/ui/card';

const features = [
  'Contenu écrit, organisé par livres et chapitres',
  'Explications directes et accessibles',
  'Audios complémentaires pour approfondir la compréhension',
  'Accès numérique sur plusieurs appareils',
];

export function Contents() {
  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center max-w-prose mx-auto">
          <h2 className="text-3xl md:text-4xl">
            Ce que contient le programme
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Card key={feature} className="border bg-card/50 shadow-none">
              <CardContent className="p-8 flex items-center justify-center h-full">
                <p className="text-lg font-medium text-center text-foreground max-w-full">{feature}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center font-semibold text-muted-foreground text-lg">
          <p className='max-w-full'>Sans excès de langage religieux.</p>
          <p className='max-w-full'>Sans discours interminables.</p>
          <p className='max-w-full'>Sans interprétations vagues.</p>
        </div>
      </div>
    </section>
  );
}
