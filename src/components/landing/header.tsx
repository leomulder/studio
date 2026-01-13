import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-headline text-xl sm:text-2xl font-bold text-foreground">
          Paroles Claires
        </Link>
        <a href="#tarifs">
          <Button>Voir les accès</Button>
        </a>
      </div>
    </header>
  );
}
