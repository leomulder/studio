import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function Authority() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Cadre sérieux
          </span>
        </div>
        <div className="grid md:grid-cols-2 md:gap-12 items-center">
          <div className="mb-10 md:mb-0">
            <h2 className="font-headline text-3xl md:text-4xl leading-tight">
              Une approche sobre, relue et structurée
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Cette étude a été conçue pour lire les Patriarches et les Prophètes avec des repères clairs, sans dramatisation ni surpromesses. Un cadre pédagogique pensé pour comprendre le texte — et le relire dans la durée.
            </p>
            <p className="mt-6 text-sm italic text-muted-foreground">
              Programme reconnu par une organisation chrétienne francophone.
            </p>
          </div>

          <div>
            <Card className="bg-secondary/50">
              <CardContent className="p-8">
                <h3 className="font-semibold text-lg mb-4 text-foreground">Repères de sérieux</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-3 mt-1 shrink-0 text-primary" />
                    <span className="text-base text-foreground">Lecture verset par verset</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-3 mt-1 shrink-0 text-primary" />
                    <span className="text-base text-foreground">Contexte + fil conducteur</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-3 mt-1 shrink-0 text-primary" />
                    <span className="text-base text-foreground">Langage clair, sans jargon</span>
                  </li>
                </ul>
                <div className="mt-8">
                    <a href="#tarifs">
                        <Button variant="link" className="p-0 h-auto text-primary">
                            Voir les options d’accès
                        </Button>
                    </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
