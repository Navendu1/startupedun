export default function QuickLinksSection() {
  return (
    <section className="quick-links-section text-foreground">
      <h2 className="text-2xl font-bold">Quick Links</h2>
      <div className="grid grid-cols-2 gap-4">
        <a href="#" className="hover:text-primary">Business Planning</a>
        <a href="#" className="hover:text-primary">Funding Resources</a>
        <a href="#" className="hover:text-primary">Legal Guidance</a>
        <a href="#" className="hover:text-primary">Marketing Strategies</a>
      </div>
    </section>
  );
}
