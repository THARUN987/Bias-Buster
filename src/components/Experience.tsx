import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Unified Mentor",
    location: "Remote",
    period: "April – July 2025",
    achievements: [
      "Built a rental management platform for landlords and tenants using React.js and Spring Boot. Designed with a focus on responsive UI and mobile compatibility, ensured high scalability and smooth performance",
      "Developed RESTful APIs for rental listings, payments, and maintenance modules. Structured the backend using controller-service-repository architecture, enabling easy extension and maintenance",
      "Implemented secure login using token-based authentication and session storage. Integrated role-based access control for landlords and tenants, ensuring protected routes and sensitive data isolation",
      "Optimized React state management to improve UI responsiveness. Reduced unnecessary re-renders and enabled smooth navigation. Used Axios for API communication with minimal page reloads"
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
