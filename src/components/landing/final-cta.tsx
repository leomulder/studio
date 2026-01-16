import { Button } from '@/components/ui/button';

export function FinalCta() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container text-center max-w-prose mx-auto px-4">
        <h2 className="text-3xl md:text-5xl">
          Commencer mon étude maintenant
        </h2>
        <div className="mt-10">
          <a href="#tarifs">
            <Button size="lg" className="px-10 py-7 text-base sm:text-lg">
              Commencer mon étude maintenant
            </Button>
          </a>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Méthode structurée • Accès immédiat • Étude à votre rythme
        </p>
      </div>
    </section>
  );
}
