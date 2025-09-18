import { Github, Linkedin, Mail, Heart, Phone, MapPin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const contactInfo = [
  {
    id: 1,
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "mysliwiec2003@gmail.com",
    href: "mailto:mysliwiec2003@gmail.com"
  },
  // {
  //   id: 2,
  //   icon: <Phone className="w-5 h-5" />,
  //   label: "Phone",
  //   value: "+1 (555) 123-4567",
  //   href: "tel:+15551234567"
  // },
  {
    id: 3,
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "New York City, NY",
    href: "#"
  }
];

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
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Get In Touch Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Let's discuss how we can work together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-medium">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  About
                </button>
                <button 
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Experience
                </button>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Projects
                </button>
                <button 
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Skills
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="font-medium">Contact Info</h4>
              <div className="space-y-3 mb-6">
                {contactInfo.map((info) => (
                  <div key={info.id} className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-md text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{info.label}</p>
                      {info.href === "#" ? (
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      ) : (
                        <a 
                          href={info.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
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
              <p className="text-sm text-muted-foreground">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you!
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Adrian Mysliwiec. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              Made using React & Tailwind
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}