import { GraduationCap, Award, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const education = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering (AI/ML)",
    institution: "Mohan Babu University",
    location: "Tirupati, AP",
    period: "Expected May 2026",
    gpa: "8.9/10"
  },
  {
    degree: "Intermediate Education",
    institution: "Krishna Chaitanya Junior College",
    location: "Board of Intermediate Education",
    period: "Jun 2020 – March 2022",
    gpa: "8.2/10"
  }
];

const achievements = [
  {
    type: "Publication",
    title: "An Adaptive Thyroid Health Monitoring for Women",
    publisher: "IEEE Xplore, 2025",
    details: "Scopus Indexed • IEEE Document"
  },
  {
    type: "Certificate",
    title: "Java Full Stack Developer Virtual Internship",
    publisher: "EduSkills Academy & AICTE",
    details: "Oct - Dec 2024 (10 Weeks) • Comprehensive training in Java Full Stack Development"
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>

        <div className="space-y-6 mb-16">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all hover:shadow-[0_0_20px_rgba(0,206,209,0.1)]"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <CardTitle className="text-xl text-primary">{edu.degree}</CardTitle>
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                </div>
                <CardDescription className="text-base">
                  {edu.institution} • {edu.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-primary font-semibold">GPA: {edu.gpa}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center gap-3 mb-8">
          <Award className="w-7 h-7 text-primary" />
          <h3 className="text-2xl md:text-3xl font-bold">Publications & Certificates</h3>
        </div>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all hover:shadow-[0_0_20px_rgba(0,206,209,0.1)]"
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    {achievement.type}
                  </span>
                </div>
                <CardTitle className="text-xl">{achievement.title}</CardTitle>
                <CardDescription className="text-base">
                  {achievement.publisher}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{achievement.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
