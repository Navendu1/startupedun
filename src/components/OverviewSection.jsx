import { ArrowRight } from "lucide-react";

export default function OverviewSection() {
  const scrollToTools = () => {
    const toolsSection = document.getElementById('interactive-tools');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Startup  <span className="text-primary">Edu </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed mb-8">
              Welcome to StartupEdu - your comprehensive guide to building successful startups.
              Explore our curated resources, interactive tools, and expert insights to kickstart
              your entrepreneurial journey.
            </p>
            <div className="inline-block">
              <button 
                onClick={scrollToTools}
                className="group flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Explore Tools
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:pl-8">
            <div className="rounded-xl bg-card p-6 shadow-lg border border-border">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Learning Modules", count: "10+" },
                  { title: "Interactive Tools", count: "5+" },
                  { title: "Success Stories", count: "20+" },
                  { title: "Expert Insights", count: "50+" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-muted/50">
                    <p className="text-2xl font-bold text-primary mb-1">{item.count}</p>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
