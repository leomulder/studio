import { Button } from '@/components/ui/button';

export function FinalCta() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container text-center">
        <h2 className="font-headline text-3xl md:text-5xl max-w-2xl mx-auto">
          Commencer l’étude maintenant
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg max-w-xl mx-auto">
          Rejoignez des centaines de lecteurs qui ont trouvé un cadre clair pour comprendre la Bible.
        </p>
        <div className="mt-8">
          <a href="#tarifs">
            <Button size="lg" className="text-base sm:text-lg px-8 py-6">
              Choisir mon accès
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
