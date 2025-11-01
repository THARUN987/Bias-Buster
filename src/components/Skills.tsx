import { Brain, Code, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming",
    skills: ["Java", "Python", "C", "HTML", "CSS", "PHP"]
  },
  {
    icon: Wrench,
    title: "Frameworks & Tools",
    skills: ["React.js", "VS Code", "Eclipse", "GitHub", "Spring Boot"]
  },
  {
    icon: Brain,
    title: "AI/ML",
    skills: ["TensorFlow", "PyTorch", "NLP", "Computer Vision", "Transformers (BERT)"]
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "MongoDB"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all hover:shadow-[0_0_20px_rgba(0,206,209,0.1)] group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
