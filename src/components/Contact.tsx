import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm currently looking for new opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a 
            href="mailto:sumanthreddych2004@gmail.com"
            className="p-6 rounded-xl border border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all hover:shadow-[0_0_20px_rgba(0,206,209,0.1)] group"
          >
            <Mail className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground break-all">sumanthreddych2004@gmail.com</p>
          </a>

          <a 
            href="tel:6305099604"
            className="p-6 rounded-xl border border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all hover:shadow-[0_0_20px_rgba(0,206,209,0.1)] group"
          >
            <Phone className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-sm text-muted-foreground">+91 6305099604</p>
          </a>

          <div className="p-6 rounded-xl border border-primary/20 bg-card/50 backdrop-blur">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-sm text-muted-foreground">Tirupati, Andhra Pradesh</p>
          </div>
        </div>

        <div className="flex gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(0,206,209,0.3)] hover:shadow-[0_0_30px_rgba(0,206,209,0.5)] transition-all"
            onClick={() => window.location.href = 'mailto:sumanthreddych2004@gmail.com'}
          >
            <Mail className="w-5 h-5 mr-2" />
            Send Email
          </Button>
        </div>

        <div className="flex gap-4 justify-center pt-8 border-t border-primary/20">
          <a 
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5 text-primary" />
          </a>
          <a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};
