import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CardMetric UK",
    description:
      "Full-stack Pokémon TCG pricing platform built for the UK market. Features collection tracking, watchlists, historical pricing, Supabase integration, eBay affiliate data, portfolio analytics and responsive dashboards.",
    image: "/projects/cardmetric.png",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "REST APIs"],
    highlights: ["UK market pricing", "Collection tracking", "eBay API data", "Portfolio analytics"],
    demoUrl: "https://cardmetric.co.uk",
    githubUrl: "https://github.com/danielkepinski/cardpulse-uk",
  },
  {
    id: 2,
    title: "Competitor Price Scraper",
    description:
      "Cross-platform desktop application that scrapes Shopify stores, matches products, compares competitor pricing and exports client-ready CSV reports. Built with Python and Tkinter.",
    image: "/projects/scraper.png",
    tags: ["Python", "Tkinter", "RapidFuzz", "CSV", "Data Scraping"],
    highlights: ["Shopify scraping", "Fuzzy matching", "CSV exports", "Client pricing reports"],
    demoUrl: "https://github.com/danielkepinski/solepurposescraper",
    githubUrl: "https://github.com/danielkepinski/solepurposescraper",
  },
  {
    id: 3,
    title: "G1M Gardening",
    description:
      "Modern business website featuring a lawn measurement estimator, interactive mapping tools, postcode lookup, lead capture forms and automated quote generation.",
    image: "/projects/g1m.png",
    tags: ["Next.js", "React", "Tailwind", "Mapbox", "Vercel"],
    highlights: ["Map drawing tool", "Live area estimates", "Postcode lookup", "Lead capture"],
    demoUrl: "https://g1more.co.uk",
    githubUrl: "https://github.com/danielkepinski/g1m-gardening",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Selected <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of real-world projects covering full-stack development,
          APIs, automation, data processing and client-facing applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={project.id}
              className={`group bg-card rounded-lg overflow-hidden shadow-xs card-hover ${
                project.id === 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className={project.id === 1 ? "h-64 overflow-hidden" : "h-48 overflow-hidden"}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-xs rounded-md border bg-secondary/60 px-3 py-2 text-muted-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/danielkepinski"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
