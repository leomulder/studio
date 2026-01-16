import { Card, CardContent } from '@/components/ui/card';

const features = [
  'Contenu écrit, organisé par livres et chapitres',
  'Explications directes et accessibles',
  'Audios complémentaires pour approfondir la compréhension',
  'Accès numérique sur plusieurs appareils',
];

export function Contents() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl">
            Ce que contient le programme
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature) => (
            <Card key={feature} className="border bg-background shadow-none">
              <CardContent className="p-8 flex items-center justify-center h-full">
                <p className="text-lg font-medium text-center text-foreground max-w-xs">{feature}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center font-semibold text-muted-foreground text-lg space-y-2">
          <p className='max-w-full mx-auto'>Sans excès de langage religieux.</p>
          <p className='max-w-full mx-auto'>Sans discours interminables.</p>
          <p className='max-w-full mx-auto'>Sans interprétations vagues.</p>
        </div>
      </div>
    </section>
  );
}
