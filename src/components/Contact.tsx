import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    id: 1,
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com"
  },
  {
    id: 2,
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    id: 3,
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "San Francisco, CA",
    href: "#"
  }
];

const socialLinks = [
  {
    id: 1,
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    href: "https://github.com/yourusername"
  },
  {
    id: 2,
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername"
  },
  {
    id: 3,
    icon: <Twitter className="w-5 h-5" />,
    label: "Twitter",
    href: "https://twitter.com/yourusername"
  }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Let's discuss how we can work together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you. Feel free to reach out through any of these channels.
                </p>
                
                {/* Contact Details */}
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.id} className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        {info.href === "#" ? (
                          <p className="text-muted-foreground">{info.value}</p>
                        ) : (
                          <a 
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-8">
                  <h4 className="font-medium mb-4">Follow Me</h4>
                  <div className="flex gap-4">
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

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}