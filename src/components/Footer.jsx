export default function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between px-4 py-6 mx-auto text-sm">
        <div className="text-muted-foreground">
          © 2024 StartupEdu. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="/terms" className="hover:text-primary">
            Terms
          </a>
          <a href="/privacy" className="hover:text-primary">
            Privacy
          </a>
          <a href="/contact" className="hover:text-primary">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
