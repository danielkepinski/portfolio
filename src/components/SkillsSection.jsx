const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend & Databases",
    skills: ["Django", "Node.js", "REST APIs", "PostgreSQL", "Supabase"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "Heroku", "Stripe", "eBay Developer APIs"],
  },
  {
    title: "Testing & Workflow",
    skills: ["Vitest", "JUnit", "Agile", "Scrum", "Object-Oriented Programming"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Technical <span className="text-primary"> Skills</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Technologies I have used across coursework, deployed portfolio projects,
          and real-world client tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <h3 className="font-semibold text-lg mb-4">{group.title}</h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full border bg-secondary/70 text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
