import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'S’agit-il d’un contenu théologique ou explicatif ?',
    answer:
      "Le contenu est avant tout explicatif. Il vise à rendre les textes clairs et accessibles, en fournissant le contexte historique et textuel nécessaire. Il ne s'agit pas d'un cours de théologie dogmatique, mais d'un outil de compréhension.",
  },
  {
    question: 'Faut-il des connaissances préalables ?',
    answer:
      "Non, aucune connaissance préalable n'est requise. Le parcours est conçu pour être progressif et est accessible aussi bien aux débutants qu'à ceux qui ont déjà une familiarité avec les textes.",
  },
  {
    question: 'Le contenu est-il dogmatique ?',
    answer:
      "Non. L'approche est centrée sur le texte lui-même. L'objectif est de vous donner les outils pour comprendre, sans imposer une doctrine ou une interprétation spécifique. L'accent est mis sur une lecture autonome et éclairée.",
  },
  {
    question: 'Puis-je étudier à mon propre rythme ?',
    answer:
      'Absolument. Il n’y a aucun calendrier ni aucune pression. Vous avancez à votre propre rythme, selon vos disponibilités et votre besoin de réflexion.',
  },
  {
    question: 'L’application fonctionne-t-elle sur mobile et ordinateur ?',
    answer:
      "Oui, l'application est conçue pour fonctionner sur tous vos appareils : ordinateur, tablette et smartphone. Votre progression est synchronisée, vous permettant de reprendre votre étude là où vous l'aviez laissée.",
  },
  {
    question: 'Comment fonctionne le remboursement ?',
    answer:
      'Si, dans le délai légal de garantie, vous estimez que le contenu ne tient pas sa promesse de clarté et de structure, un simple message suffit pour demander un remboursement complet, sans complication.',
  },
];

export function Faq() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/50">
      <div className="container max-w-3xl">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl">
            Questions fréquentes
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left font-medium text-base">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
