import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      
      <footer className="py-8 px-4 text-center border-t border-primary/20">
        <p className="text-sm text-muted-foreground">
          © 2025 Chejarla Tharun Kumar Reddy. Built with React & TypeScript.
        </p>
      </footer>
    </main>
  );
};

export default Index;
