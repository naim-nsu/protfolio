import data from "@/assets/data.json";
import { Gem, GraduationCap, Languages } from "lucide-react";

const iconMap = {
  Gem,
  GraduationCap,
  Languages,
};

type IconName = keyof typeof iconMap;

export const About = () => {
  return (
    <section id="about" className="py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column */}
          <div className="space-y-8 fade-in">
            <span className="section-label">About me</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight fade-in delay-100">
              Engineer by trade,
              <span className="font-serif italic font-normal text-accent">
                {" "}
                curious by nature.
              </span>
            </h2>

            {/* description */}
            <div className="space-y-4 text-muted leading-relaxed  md:text-justify fade-in delay-200">
              {data["about-me-description"].map((desc, idx) => (
                <p key={idx}>{desc}</p>
              ))}
            </div>
          </div>

          {/* right column */}
          <div className="grid md:grid-cols-2 gap-6">
            {data["about-me-cards"].map((item, idx) => {
              const Icon = iconMap[item.icon as IconName] ?? Gem;

              return (
                <div
                  key={idx}
                  className="card text-center min-w-full fade-in"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="flex items-center flex-col">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 hover:bg-accent/20">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">
                      {item.title}
                    </h3>
                  </div>
                  <div className="text-sm font-mono tracking-widest text-hint">
                    {item.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
