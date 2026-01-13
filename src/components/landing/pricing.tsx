import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Check, ShieldCheck, Lock, Rocket } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const includedFeatures = [
  'Accès intégral aux Patriarches',
  'Accès intégral aux Prophètes',
  'Format texte + audio',
  'Prise de notes personnelle',
  'Accès sur tous vos appareils',
  'Mises à jour et compléments inclus',
];

export function Pricing() {
  return (
    <section id="tarifs" className="py-16 sm:py-24 bg-secondary">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl">
            Choisissez votre accès
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Un investissement unique pour une compréhension qui dure toute une vie.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start max-w-4xl mx-auto">
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>Juste les Patriarches</CardTitle>
              <CardDescription>Pour commencer avec la Genèse et les pères de la foi.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight">7,90€</span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">Paiement unique</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground">
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-primary" />
                  Accès intégral aux Patriarches
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-primary" />
                  Format texte seul
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Choisir cette option</Button>
            </CardFooter>
          </Card>

          <Card className="relative flex flex-col h-full border-2 border-primary shadow-2xl">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Recommandé</Badge>
            <CardHeader>
              <CardTitle>Accès intégral</CardTitle>
              <CardDescription>L'expérience complète pour une vision d'ensemble de l'Ancien Testament.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight">11,90€</span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">Paiement unique</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-foreground">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Je choisis l'accès intégral</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-8 flex items-center justify-center gap-x-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4"/>
            Garantie 15 jours
          </div>
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4"/>
            Paiement sécurisé
          </div>
           <div className="flex items-center gap-2">
            <Rocket className="h-4 w-4"/>
            Accès immédiat
          </div>
        </div>
      </div>
    </section>
  );
}
