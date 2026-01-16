import { ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Guarantee() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="container max-w-3xl">
        <Card className="bg-secondary">
          <CardContent className="flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:text-left">
            <ShieldCheck className="h-12 w-12 shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold text-lg">
                Garantie de satisfaction
              </h3>
              <p className="mt-1 text-muted-foreground">
                Si le contenu ne correspond pas à la clarté et à la structure présentées, vous pouvez demander un remboursement dans le délai prévu. Simple et sans complication.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
