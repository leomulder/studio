import { ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Guarantee() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="container max-w-3xl">
        <Card className="bg-secondary/70 border-primary/20 border">
          <CardContent className="flex flex-col items-center gap-6 p-8 text-center sm:flex-row sm:text-left">
            <ShieldCheck className="h-16 w-16 shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold text-lg">
                Garantie de satisfaction
              </h3>
              <p className="mt-2 text-muted-foreground">
                Si le contenu ne correspond pas à la clarté et à la structure présentées, vous pouvez demander un remboursement dans le délai prévu. Simple et sans complication.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
