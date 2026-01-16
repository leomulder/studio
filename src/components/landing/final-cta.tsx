import { Button } from '@/components/ui/button';

export function FinalCta() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container text-center">
        <h2 className="font-headline text-3xl md:text-5xl max-w-2xl mx-auto">
          Commencer mon étude maintenant
        </h2>
        <div className="mt-8">
          <a href="#tarifs">
            <Button size="lg" className="text-base sm:text-lg px-8 py-6">
              Commencer mon étude maintenant
            </Button>
          </a>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Méthode structurée • Accès immédiat • Étude à votre rythme
        </p>
      </div>
    </section>
  );
}
