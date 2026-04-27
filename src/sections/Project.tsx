import data from "@/assets/data.json";
import { ArrowUpRightIcon } from "lucide-react";

export const Project = () => {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6 space-y-8 fade-in">
        <span className="section-label">Projects</span>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight fade-in delay-100">
          Featured work that
          <span className="font-serif italic font-normal text-accent">
            {" "}
            make an impact.
          </span>
        </h2>
        <p
          className="text-muted
           fade-in delay-200"
        >
          A selection of projects that reflects my experience, problem-solving
          approach, and continuous growth across different technologies and
          domains.
        </p>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-fr">
          {data.projects.map((project, idx) => (
            <div
              key={idx}
              className="card relative overflow-hidden fade-in"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              <div className="flex flex-col gap-2 h-full pb-4">
                <div className="min-h-3/4">
                  <h3 className="text-lg font-semibold text-hint tracking-wide mb-4">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span key={t} className="chip text-xs px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>
                {project?.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute right-4 bottom-4 flex items-center gap-1.5 text-xs text-hint hover:text-accent transition-colors"
                  >
                    View project <ArrowUpRightIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
