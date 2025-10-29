import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_hsl(195_100%_50%/0.1),transparent_50%)]" />
      
      <div className="container mx-auto relative z-10 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-primary font-semibold mb-2 tracking-wider uppercase text-sm md:text-base">
            Hi, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Sumanth Reddy
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-light">
            AI/ML Developer & Full Stack Engineer
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Energetic AI/ML enthusiast leveraging B.Tech training to build intelligent solutions. 
            Skilled in Python, Java, React, and machine learning with a passion for creating impactful applications.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(0,206,209,0.3)] hover:shadow-[0_0_30px_rgba(0,206,209,0.5)] transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <a 
              href="mailto:sumanthreddych2004@gmail.com"
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-primary" />
            </a>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-primary" />
            </a>
            <a 
              href="tel:6305099604"
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
