import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "AI Developer Intern",
    company: "IIIT Hyderabad (Viswam.ai)",
    location: "Hyderabad",
    period: "Aug 2024 – Present",
    achievements: [
      "Develop and optimize machine learning models for early prediction of cardiac arrest in newborns, analyzing large-scale, multimodal ICU time-series data",
      "Engineer features and implement data preprocessing pipelines for high-dimensional medical data, improving model training efficiency by 30%"
    ]
  },
  {
    title: "Java Full Stack Developer Intern",
    company: "ISREE",
    location: "Remote",
    period: "Feb 2024 – Apr 2024",
    achievements: [
      "Engineered a full-stack web application for Cliff Services using Java Spring Boot and React/Next.js, enhancing front-end responsiveness and user engagement",
      "Implemented secure user authentication and authorization, ensuring data privacy and system security"
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all hover:shadow-[0_0_20px_rgba(0,206,209,0.1)]"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <CardTitle className="text-xl text-primary">{exp.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <CardDescription className="text-base">
                  {exp.company} • {exp.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-2 text-muted-foreground">
                      <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
