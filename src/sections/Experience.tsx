import data from "@/assets/data.json";

export const Experience = () => {
  return (
    <section id="experience" className="py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 fade-in">
          <span className="section-label">Journey</span>
          <h2
            className="text-4xl md:text-5xl font-bold
            mb-6 fade-in delay-100
            text-secondary-foreground"
          >
            Experience that
            <span className="font-serif italic font-normal text-accent">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted
           fade-in delay-200"
          >
            A brief overview of my professional and academic journey so far.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-border-strong via-border-strong/50 to-transparent md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {data.experience_timeline.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-accent rounded-full -translate-x-1/2 ring-4 ring-border z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0 ? "md:pr-16" : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className={`card`}>
                    <div className="">
                      <span className="font-mono text-xs text-hint tracking-widest">
                        {exp.year}
                      </span>
                      <span
                        className={`text-xs ml-4 px-2.5 py-0.5 rounded-full font-medium border ${exp.type === "edu" ? "bg-badge-edu-bg text-badge-edu-text border-badge-edu-text/20" : "bg-badge-work-bg text-badge-work-text border-badge-work-text/20"}`}
                      >
                        {exp.type === "edu" ? "Education" : "Work"}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mt-2">{exp.title}</h3>
                    <p className="text-muted text-sm">{exp.org}</p>
                    <p className="text-sm text-muted mt-4">{exp.desc}</p>
                    <div className={`flex flex-wrap gap-2 mt-4`}>
                      {exp.techs.map((tech, techIdx) => (
                        <span key={techIdx} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
