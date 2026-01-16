const outcomes = [
  'Lire les textes bibliques avec plus d’autonomie',
  'Comprendre la chronologie et la logique des récits',
  'Identifier clairement le rôle des patriarches et des prophètes',
  'Étudier sans dépendre constamment de vidéos ou de tiers',
];

export function Benefits() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container max-w-2xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl">
          Après avoir étudié ce contenu, vous serez capable de :
        </h2>
        <div className="mt-12">
          <ul className="space-y-6">
            {outcomes.map((outcome, index) => (
               <li key={index} className="text-lg md:text-xl text-foreground mx-auto">
                  {outcome}
                </li>
            ))}
          </ul>
        </div>
        <p className="mt-16 text-center font-headline text-2xl md:text-3xl text-muted-foreground">
          Une transformation intellectuelle, rationnelle et durable.
        </p>
      </div>
    </section>
  );
}
