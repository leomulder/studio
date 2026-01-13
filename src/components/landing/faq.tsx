import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Est-ce un abonnement ?',
    answer:
      'Non, absolument pas. Il s’agit d’un paiement unique qui vous donne un accès à vie à l’étude, sans aucun frais caché ou récurrent.',
  },
  {
    question: 'Sur quels appareils puis-je accéder à l’étude ?',
    answer:
      'L’accès est possible depuis n’importe quel appareil avec un navigateur web : ordinateur, tablette ou smartphone. Votre progression est synchronisée.',
  },
  {
    question: 'Est-ce adapté si je n’ai aucune formation théologique ?',
    answer:
      'Oui, tout à fait. L’étude est conçue pour être claire et accessible, sans jargon technique. Elle offre un cadre solide pour débuter ou approfondir sa lecture de la Bible.',
  },
  {
    question: 'Puis-je avancer à mon propre rythme ?',
    answer:
      'Absolument. Il n’y a aucun calendrier imposé ni aucune pression. Vous pouvez prendre le temps qu’il vous faut pour chaque séance, selon vos disponibilités et votre besoin de réflexion.',
  },
];

export function Faq() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container max-w-3xl">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl">
            Questions fréquentes
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
