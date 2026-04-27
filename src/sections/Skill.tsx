import data from "@/assets/data.json";

export const Skill = () => {
  return (
    <section id="skills" className="py-32">
      <div className="container mx-auto px-6 space-y-8 fade-in">
        <span className="section-label">Skills</span>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight fade-in delay-100">
          Technologies that
          <span className="font-serif italic font-normal text-accent">
            {" "}
            I work with.
          </span>
        </h2>
        <p
          className="text-muted
           fade-in delay-200"
        >
          A quick overview of the tools and technologies I use across projects.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(data.skills).map(([category, items], idx) => (
            <div
              key={idx}
              className="card min-w-full fade-in"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              <h3 className="text-sm font-mono font-medium text-hint uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {items.map((skill, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-center gap-2.5 text-sm text-foreground"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                    <span className="tracking-widest ml-2">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
