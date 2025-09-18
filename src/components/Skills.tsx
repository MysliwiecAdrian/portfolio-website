import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Code2, Palette, Database, Globe, Smartphone, Settings } from "lucide-react";

const skillCategories = [
  {
    id: 1,
    title: "Frontend Development",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "HTML/CSS", level: 98 },
      { name: "Tailwind CSS", level: 92 }
    ]
  },
  {
    id: 2,
    title: "Backend Development",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 }
    ]
  },
  {
    id: 3,
    title: "Design & UX",
    icon: <Palette className="w-6 h-6" />,
    skills: [
      { name: "Figma", level: 92 },
      { name: "Adobe Creative Suite", level: 85 },
      { name: "UI/UX Design", level: 88 },
      { name: "Prototyping", level: 90 }
    ]
  },
  // {
  //   id: 4,
  //   title: "Mobile Development",
  //   icon: <Smartphone className="w-6 h-6" />,
  //   skills: [
  //     { name: "React Native", level: 85 },
  //     { name: "Flutter", level: 75 },
  //     { name: "iOS Development", level: 70 },
  //     { name: "Android Development", level: 72 }
  //   ]
  // },
  {
    id: 5,
    title: "Cloud & DevOps",
    icon: <Globe className="w-6 h-6" />,
    skills: [
      { name: "AWS", level: 82 },
      { name: "Docker", level: 85 },
      { name: "CI/CD", level: 88 },
      { name: "Kubernetes", level: 75 }
    ]
  },
  {
    id: 6,
    title: "Tools & Others",
    icon: <Settings className="w-6 h-6" />,
    skills: [
      { name: "Git", level: 95 },
      { name: "Jest/Testing", level: 85 },
      { name: "Webpack", level: 80 },
      { name: "GraphQL", level: 78 }
    ]
  }
];

const certifications = [
  "AWS Certified Developer",
  "Google Cloud Professional",
  "MongoDB Certified Developer",
  "Figma Professional Certificate"
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category) => (
              <Card key={category.id} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          {/* <div className="text-center">
            <h3 className="text-2xl mb-8">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert) => (
                <Badge key={cert} variant="secondary" className="px-4 py-2 text-sm">
                  {cert}
                </Badge>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}