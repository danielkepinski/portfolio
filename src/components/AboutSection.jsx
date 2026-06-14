import { Briefcase, Code, GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Building practical software from real-world problems
            </h3>

            <p className="text-muted-foreground">
              After 11 years in customer-facing roles, I moved into software
              development through a Level 5 Diploma in Full Stack Software
              Development and am now studying a BSc in Computer Science & Cyber
              Security.
            </p>

            <p className="text-muted-foreground">
              I focus on building useful applications rather than demo projects:
              pricing platforms, automation tools, data workflows and custom
              websites that solve specific problems for users or clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Daniel-Kepinski-CV.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building React, Next.js and Django applications with APIs,
                    databases and deployment in mind.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Computer Science Study</h4>
                  <p className="text-muted-foreground">
                    Currently studying Computer Science & Cyber Security,
                    strengthening Java, OOP, testing and problem-solving skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Commercial Mindset</h4>
                  <p className="text-muted-foreground">
                    Previous self-employment and client-facing experience help
                    me understand users, deadlines and practical business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
