import { Ghost, TrendingDown, Workflow } from "lucide-react";

const painPoints = [
  {
    icon: Ghost,
    title: "Freelance Thumbnail Designers Ghost You",
    description: "Tired of hiring and dealing with unreliable and unprofessional designers?",
  },
  {
    icon: TrendingDown,
    title: "Have Boring Thumbnails That Get Lost In YouTube Feed",
    description: "Tired of having a low CTR no matter what you do?",
  },
  {
    icon: Workflow,
    title: "Tired of Managing It All Yourself",
    description: "Have no systems in place and producing every thumbnail is a hassle",
  },
];

const PainPoints = () => {
  return (
    <section className="py-20 md:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center tracking-tight">
          Does This Sound Like <span className="text-gradient">You?</span>
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-7 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5">
                <point.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
