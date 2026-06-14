import { ArrowDown, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm md:text-base font-medium uppercase tracking-[0.3em] text-primary opacity-0 animate-fade-in">
              Junior Software Developer
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1">
              Daniel <span className="text-gradient">Kepinski</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
            Building full-stack applications, automation tools and data-driven
            products with React, TypeScript, Python and modern web technologies.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-delay-3">
            <a href="#projects" className="cosmic-button">
              View Projects
            </a>

            <a
              href="/Daniel-Kepinski-CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Download CV <Download className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground opacity-0 animate-fade-in-delay-4">
            <span className="rounded-full border bg-secondary/60 px-4 py-2">
              Level 5 Full Stack Software Development
            </span>
            <span className="rounded-full border bg-secondary/60 px-4 py-2">
              BSc Computer Science & Cyber Security
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
