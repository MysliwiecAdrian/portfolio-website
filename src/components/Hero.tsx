import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    id: 1,
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    href: "https://github.com/MysliwiecAdrian"
  },
  {
    id: 2,
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adrian-mysliwiec/"
  },
  // {
  //   id: 3,
  //   icon: <Twitter className="w-5 h-5" />,
  //   label: "Twitter",
  //   href: "https://twitter.com/yourusername"
  // }
  {
    id: 3,
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "mysliwiec2003@gmail.com",
    href: "mailto:mysliwiec2003@gmail.com"
  }
];

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Adrian_Mysliwiec_Resume.pdf"; // Optional: custom filename
    link.click();
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
                  src="https://media.licdn.com/dms/image/v2/C4D03AQHKgQFC8UoHrQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1595919312869?e=1760572800&v=beta&t=lTeG9xSqVnbuHeuJT8nL4IuI2uiRVJu7nspS8hBkAcI"
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
                  Hi, I'm <span className="text-primary">Adrian Mysliwiec</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground">
                  Frontend & C++ Developer
                </h2>
                <p className="text-lg text-muted-foreground max-w-lg">
                  I aim to build products that have a meaningful impact on people. Passionate about growing and adapting to new changes in life.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" onClick={() => scrollToSection('projects')}>
                  View My Work
                </Button>
                <Button size="lg" variant="outline" onClick={handleDownload}>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center md:justify-start pt-4">
                {/* <Button size="icon" variant="ghost" className="rounded-full" href="https://github.com/MysliwiecAdrian">
                  <Github className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="rounded-full">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="rounded-full">
                  <Mail className="w-5 h-5" />
                </Button> */}
                {socialLinks.map((social) => (
                  <Button
                    key={social.id}
                    size="icon"
                    variant="outline"
                    className="rounded-full"
                    asChild
                    >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}