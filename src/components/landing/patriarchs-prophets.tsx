import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const patriarchs = [
  {
    id: 'abraham',
    name: 'Abraham',
    subtitle: 'Foi. Sacrifice. Promesse.',
    description: 'Comprendre pourquoi Abraham constitue la base de toute l’histoire spirituelle et narrative de la Bible.',
  },
  {
    id: 'isaac',
    name: 'Isaac',
    subtitle: 'Transmission et héritage.',
    description: 'Une figure souvent silencieuse, mais centrale pour comprendre la continuité et le sens de la promesse.',
  },
  {
    id: 'jacob',
    name: 'Jacob',
    subtitle: 'Identité, conflit et transformation.',
    description: 'Le récit précis d’un homme dont le nom change — et avec lui, toute la trajectoire de l’histoire.',
  },
];

const prophets = [
  {
    id: 'isaie',
    name: 'Isaïe',
    subtitle: 'Le prophète messianique.',
    description: 'Une vision structurée et cohérente du projet de rédemption, replacée dans son contexte historique et textuel.',
  },
  {
    id: 'jeremie',
    name: 'Jérémie',
    subtitle: 'La tension entre justice et compassion.',
    description: 'Un regard direct sur la parole prophétique, sans idéalisation ni simplification.',
  },
  {
    id: 'ezechiel',
    name: 'Ézéchiel',
    subtitle: 'Symboles, visions et langage prophétique.',
    description: 'Des images complexes, souvent évitées, ici expliquées avec méthode et clarté.',
  },
  {
    id: 'daniel',
    name: 'Daniel',
    subtitle: 'Fidélité, prophéties et temporalité.',
    description: 'Une lecture rigoureuse des visions et des récits liés à la fin des temps, expliqués sans spéculation.',
  },
];

const FigureCard = ({ figure }: { figure: { id: string, name: string, subtitle: string, description: string }}) => {
  const image = PlaceHolderImages.find((img) => img.id === figure.id);
  return (
    <div className="flex flex-col items-center text-center">
      {image && (
        <div className="relative h-64 w-48 mb-6 overflow-hidden rounded-lg shadow-md">
          <Image
            src={image.imageUrl}
            alt={figure.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            data-ai-hint={image.imageHint}
          />
        </div>
      )}
      <h4 className="font-semibold text-xl text-foreground">{figure.name}</h4>
      <p className="mt-1 text-primary/90 font-medium">{figure.subtitle}</p>
      <p className="mt-3 text-muted-foreground text-sm max-w-xs">{figure.description}</p>
    </div>
  );
}

export function PatriarchsProphets() {
  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl text-foreground">
            📚 Une exploration structurée des Patriarches et des Prophètes
          </h2>
          <div className="mt-4 h-1 w-24 bg-primary/20 mx-auto"></div>
        </div>

        <div className="mt-24">
            <div className="text-center">
                <h3 className="font-headline text-4xl text-foreground mb-4">Les Patriarches</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Une lecture progressive pour comprendre les fondations de l’histoire biblique. Vous ne les observez pas de loin. Vous suivez leur parcours, leurs choix et les enjeux qui traversent leurs récits.
                </p>
            </div>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 max-w-5xl mx-auto">
              {patriarchs.map((figure) => (
                <FigureCard key={figure.name} figure={figure} />
              ))}
            </div>
        </div>

        <div className="mt-32">
            <div className="text-center">
                <h3 className="font-headline text-4xl text-foreground mb-4">📖 Les Prophètes</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Ici, les Écritures prennent une profondeur nouvelle.
                </p>
            </div>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
              {prophets.map((figure) => (
                <FigureCard key={figure.name} figure={figure} />
              ))}
            </div>
        </div>


        <div className="mt-32 text-center">
            <blockquote className="font-headline text-xl md:text-2xl max-w-3xl mx-auto text-foreground/80 italic">
             “Chaque figure est étudiée dans son contexte, son rôle et sa logique narrative — sans interprétation excessive.”
            </blockquote>
        </div>
      </div>
    </section>
  );
}
