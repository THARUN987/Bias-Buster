import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

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
            Tharun Kumar Reddy
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-light">
            AI Full Stack Developer
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Computer Science undergraduate with expertise in AI Full Stack Development and strong problem-solving skills. 
            Passionate about building user-focused products, combining technical knowledge with analytical thinking to deliver impactful solutions.
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
            <Link to="/bias-buster">
              <Button 
                size="lg" 
                variant="secondary"
                className="group"
              >
                <Sparkles className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                Try Bias Buster
              </Button>
            </Link>
          </div>

          <div className="flex gap-4 justify-center">
            <a 
              href="mailto:tharunch369@gmail.com"
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-primary" />
            </a>
            <a 
              href="https://www.linkedin.com/in/tharunch"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
            <a 
              href="https://github.com/tharunch"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-primary" />
            </a>
            <a 
              href="tel:+919441993638"
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
