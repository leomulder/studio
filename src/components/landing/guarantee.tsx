import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Guarantee() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container max-w-3xl px-4">
        <Card className="bg-secondary border-none">
          <CardContent className="p-8 sm:p-10 text-center">
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
