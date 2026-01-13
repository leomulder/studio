import { ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Guarantee() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="container max-w-3xl">
        <Card className="bg-secondary">
          <CardContent className="flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:text-left">
            <ShieldCheck className="h-12 w-12 shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold text-lg">
                Votre satisfaction est notre priorité
              </h3>
              <p className="mt-1 text-muted-foreground">
                Vous avez 15 jours pour découvrir en toute tranquillité. Un simple message suffit si ce n’est pas ce que vous cherchez, et nous vous remboursons intégralement.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
