import { Code2, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Bias Buster – AI-Powered Resume Language Auditor",
    description: "NLP-powered tool to identify and eliminate biased language in resumes, improving inclusivity for job seekers.",
    technologies: ["Python", "NLP", "Transformers", "BERT", "React"],
    achievements: [
      "Identified and eliminated biased language in resumes using NLP and transformer models, improving inclusivity for job seekers",
      "Delivered real-time suggestions through an intuitive web interface, enhancing user engagement and usability",
      "Aligned the product with DEI (Diversity, Equity, Inclusion) goals, supporting fair hiring practices for organizations"
    ],
    github: "https://github.com/tharunch/bias-buster"
  },
  {
    title: "Functional Brain Tumor Mapping Using PET",
    description: "Advanced segmentation model leveraging SE-UNet for tumor detection and metabolic analysis.",
    technologies: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "Medical Imaging"],
    achievements: [
      "Developing an advanced segmentation model with Squeeze-and-Excitation blocks to enhance tumor boundary detection",
      "Integrating PET radiomics features for voxel-wise analysis to classify tumor regions into high, medium, and low metabolic zones",
      "Generating functional heatmaps for better visualization of intra-tumor heterogeneity, supporting personalized therapy planning"
    ],
    github: "https://github.com/tharunch/brain-tumor-mapping"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all hover:shadow-[0_0_20px_rgba(0,206,209,0.1)] group"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <CardTitle className="text-2xl text-primary group-hover:text-primary/90 transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-primary/30 hover:border-primary hover:bg-primary/10"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
                <CardDescription className="text-base mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
