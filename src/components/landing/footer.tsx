export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex h-20 items-center justify-center">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Paroles Claires. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
