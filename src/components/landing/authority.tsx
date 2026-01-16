export function Authority() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl leading-tight">
            Une approche sérieuse, pédagogique et structurée
          </h2>
        </div>
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3">
            <p className="text-lg text-muted-foreground max-w-prose">
              Ce contenu repose sur une approche de lecture claire et progressive des textes bibliques, en mettant l’accent sur :
            </p>
            <ul className="mt-6 space-y-2">
                <li className="text-lg text-foreground">La cohérence textuelle</li>
                <li className="text-lg text-foreground">L’organisation historique</li>
                <li className="text-lg text-foreground">La clarté conceptuelle</li>
                <li className="text-lg text-foreground">Des explications accessibles, sans simplification excessive</li>
            </ul>
            <p className="mt-6 text-lg text-muted-foreground max-w-prose">
              L’objectif n’est pas d’imposer une interprétation, mais d’offrir des outils de compréhension, afin que chaque lecteur puisse construire son propre regard à partir du texte.
            </p>
          </div>
          <div className="md:col-span-2 bg-card p-8 rounded-lg border">
            <blockquote className="text-base text-foreground italic max-w-prose">
              « Inspiré de méthodes académiques d’analyse et de lecture des textes, ce contenu suit une progression logique qui respecte le contexte, la chronologie des récits et l’intention originale des écrits. »
            </blockquote>
            <div className="mt-6 text-center font-semibold text-muted-foreground/80 text-sm">
              <p className="max-w-full">Sans rhétorique.</p>
              <p className="max-w-full">Sans exagération.</p>
              <p className="max-w-full">Sans raccourci.</p>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center">
            <p className="font-headline text-xl md:text-2xl max-w-prose mx-auto tracking-wide">
              Comprendre un texte exige une méthode — pas seulement de la bonne volonté.
            </p>
        </div>
      </div>
    </section>
  );
}
