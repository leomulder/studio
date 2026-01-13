import { FileText, AudioLines, NotebookPen, Laptop, Smartphone, Library } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const contents = [
  {
    icons: [FileText, AudioLines],
    title: 'Texte + audio',
    description: 'Lisez ou écoutez chaque étude, selon votre préférence.',
  },
  {
    icons: [NotebookPen],
    title: 'Notes personnelles',
    description: 'Conservez vos réflexions directement dans l’interface.',
  },
  {
    icons: [Laptop, Smartphone],
    title: 'Accès multi-appareils',
    description: 'Sur ordinateur, tablette ou téléphone.',
  },
  {
    icons: [Library],
    title: '+2 300 passages expliqués',
    description: 'Une bibliothèque riche pour une compréhension profonde.',
  },
];

export function Contents() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl">
            Ce que contient l’expérience
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Un espace de lecture pensé pour durer, avec tous les outils nécessaires.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contents.map((item, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center items-center gap-2">
                  {item.icons.map((Icon, i) => (
                    <Icon key={i} className="h-8 w-8 text-primary" />
                  ))}
                </div>
                <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
