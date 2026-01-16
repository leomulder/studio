import { ShieldCheck } from 'lucide-react';

export function Guarantee() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container max-w-3xl px-4 text-center">
        <ShieldCheck className="h-16 w-16 mx-auto text-primary/50" />
        <h2 className="mt-6 font-headline text-3xl md:text-4xl">Garantie de satisfaction</h2>
        <div className="mt-4 h-1 w-24 bg-primary/20 mx-auto"></div>
        <p className="mt-8 text-lg text-muted-foreground max-w-prose mx-auto">
          Si le contenu ne correspond pas à la clarté et à la structure présentées, vous pouvez demander un remboursement dans le délai prévu. Simple et sans complication.
        </p>
      </div>
    </section>
  );
}
