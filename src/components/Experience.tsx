import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Led development of scalable web applications serving 100K+ users. Mentored junior developers and implemented CI/CD pipelines.",
    achievements: [
      "Improved application performance by 40%",
      "Led team of 5 developers",
      "Implemented microservices architecture"
    ],
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Agency Co.",
    location: "New York, NY",
    period: "2020 - 2022",
    description: "Developed responsive web applications and collaborated with design teams to create pixel-perfect implementations.",
    achievements: [
      "Delivered 15+ client projects on time",
      "Reduced code bundle size by 30%",
      "Implemented accessibility standards"
    ],
    technologies: ["React", "TypeScript", "Sass", "Webpack", "Jest"]
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "StartUp Hub",
    location: "Austin, TX",
    period: "2019 - 2020",
    description: "Built and maintained company websites, learned modern development practices, and contributed to open-source projects.",
    achievements: [
      "Built 10+ responsive websites",
      "Learned modern JavaScript frameworks",
      "Contributed to team code reviews"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Git"]
  }
];

const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    school: "University of Technology",
    location: "California, USA",
    period: "2015 - 2019",
    description: "Focused on software engineering, algorithms, and data structures. Graduated Magna Cum Laude."
  },
  {
    id: 2,
    degree: "Full Stack Web Development Bootcamp",
    school: "Code Academy",
    location: "Online",
    period: "2019",
    description: "Intensive 6-month program covering modern web development technologies and best practices."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Experience & Education</h2>
            <p className="text-lg text-muted-foreground">
              My professional journey and educational background
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-2xl mb-8 text-center">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline Line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-border"></div>
                  )}
                  
                  <div className="flex gap-6">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-primary-foreground rounded-full"></div>
                    </div>

                    {/* Content */}
                    <Card className="flex-1">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <CardTitle>{exp.title}</CardTitle>
                            <CardDescription className="text-lg">{exp.company}</CardDescription>
                          </div>
                          <div className="flex flex-col sm:items-end gap-1">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <CalendarDays className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <p>{exp.description}</p>
                        
                        <div>
                          <h4 className="font-medium mb-2">Key Achievements:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl mb-8 text-center">Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu) => (
                <Card key={edu.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <CardDescription>{edu.school}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <CalendarDays className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                      <p className="text-sm mt-3">{edu.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}