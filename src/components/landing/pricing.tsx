"use client";

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';

const includedFeatures = [
  'Accès intégral aux Patriarches',
  'Accès intégral aux Prophètes',
  'Format texte + audio',
  'Prise de notes personnelle',
  'Accès sur tous vos appareils',
  'Mises à jour et compléments inclus',
];

export function Pricing() {
  const handleCheckoutClick = (url: string) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
    setTimeout(() => {
      window.location.href = url;
    }, 500);
  };

  return (
    <section id="tarifs" className="py-24 sm:py-32 bg-secondary">
      <div className="container">
        <div className="text-center max-w-prose mx-auto">
          <h2 className="text-3xl md:text-4xl">
            Choisissez le format qui correspond à votre rythme
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Prix accessible. Valeur clairement justifiée. Aucune pression artificielle.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start max-w-sm sm:max-w-4xl mx-auto">
          <Card className="flex flex-col h-full border-2 shadow-none">
            <CardHeader>
              <CardTitle>Juste les Patriarches</CardTitle>
              <CardDescription>Pour commencer avec la Genèse et les pères de la foi.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight">11,90€</span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">Paiement unique</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                <li className="flex gap-x-3 items-center">
                  <Check className="h-5 w-5 flex-none text-primary/70" />
                  Accès intégral aux Patriarches
                </li>
                <li className="flex gap-x-3 items-center">
                  <Check className="h-5 w-5 flex-none text-primary/70" />
                  Format texte seul
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full" 
                onClick={() => handleCheckoutClick('https://pay.hotmart.com/X99498922F?off=0lf0vsdh&checkoutMode=10&utm_source=utmify')}
              >
                Accéder au contenu
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-full border-2 border-primary/50 shadow-none">
            <CardHeader>
              <CardTitle>Accès intégral</CardTitle>
              <CardDescription>L'expérience complète pour une vision d'ensemble de l'Ancien Testament.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight">21,90€</span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">Paiement unique</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-foreground">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3 items-center">
                    <Check className="h-5 w-5 flex-none text-primary/70" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                size="lg"
                className="w-full"
                onClick={() => handleCheckoutClick('https://pay.hotmart.com/X99498922F?off=dmbffmon&checkoutMode=10&utm_source=utmify')}
              >
                Accéder au contenu
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
