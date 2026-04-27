import data from "@/assets/data.json";
import { ArrowRight, Download } from "lucide-react";

export const Hero = () => {
  const handleDownloadCv = () => {
    const link = document.createElement("a");
    link.href = "/Naim_CV.pdf";
    link.download = "Mohammad_Naim_CV.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  return (
    <section className="min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 pt-32 pb-20">
        {/* section label */}
        <div className="fade-in">
          <span className="section-label">Full-Stack Software Engineer</span>
        </div>
        {/* title */}
        <div className="fade-in delay-100 text-6xl md:text-7xl lg:text-8xl font-bold leading-tight w-fit">
          <span className="block ">Mohammad</span>
          <span className="block text-right text-accent font-serif italic font-normal pr-1">
            Naim
          </span>
        </div>
        {/* line */}
        <div className="w-10 h-0.5 bg-accent mt-8 mb-6 fade-in delay-200" />
        {/* description */}
        <p className="fade-in delay-300 text-lg text-muted max-w-lg leading-relaxed mb-6 whitespace-pre-line">
          {data["hero-description"]}
        </p>
        {/* core skills */}
        <div className="fade-in delay-400 flex flex-wrap gap-2 mb-6 md:mb-12">
          {data["hero-core-skills"].map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
        {/* CTA buttons */}
        <div className="fade-in delay-500 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary flex gap-2 items-center"
          >
            <span>View Projects</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={handleDownloadCv}
            className="btn-secondary flex gap-2 items-center"
          >
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </section>
  );
};
