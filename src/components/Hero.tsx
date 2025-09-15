import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzUyOTgzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional headshot"
                  className="w-80 h-80 object-cover rounded-full shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full ring-4 ring-primary/20"></div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="text-center md:text-left space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl">
                  Hi, I'm <span className="text-primary">Your Name</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground">
                  Full Stack Developer & UI/UX Designer
                </h2>
                <p className="text-lg text-muted-foreground max-w-lg">
                  I create beautiful, functional digital experiences that solve real-world problems. 
                  Passionate about clean code, intuitive design, and continuous learning.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" onClick={() => scrollToSection('projects')}>
                  View My Work
                </Button>
                <Button size="lg" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center md:justify-start pt-4">
                <Button size="icon" variant="ghost" className="rounded-full">
                  <Github className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="rounded-full">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="rounded-full">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}