import { Card, CardContent } from '@/components/ui/card';

export function Guarantee() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container max-w-3xl">
        <Card className="bg-transparent border-0 shadow-none">
          <CardContent className="p-0 text-center">
            <h3 className="font-semibold text-lg">
              Garantie de satisfaction
            </h3>
            <p className="mt-2 text-muted-foreground max-w-prose mx-auto">
              Si le contenu ne correspond pas à la clarté et à la structure présentées, vous pouvez demander un remboursement dans le délai prévu. Simple et sans complication.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
