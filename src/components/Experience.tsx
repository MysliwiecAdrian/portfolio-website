import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Adjunct Lecturer",
    company: "CUNY Hunter College",
    location: "Manhattan, NY",
    period: "Sept. 2025 - Present",
    description: "Educate multiple sections of Software Analysis & Design I (C++) in Object Oriented Principles.",
    achievements: [
      "Improve student work completion and grades by 40%",
      "Collaborate with the lead professor and team of 20+ teaching assistants",
      "Grade, proctor, and tutor students to support mastery of the course"
    ],
    technologies: ["C++", "OOP", "Software Analysis", "Software Design"]
  },
  {
    id: 2,
    title: "Software Engineering Intern",
    company: "Unadat",
    location: "New York City, NY",
    period: "June 2025 - August 2025",
    description: "Built new features for the financial wellness SaaS platform to encompass multi-purpose usage.",
    achievements: [
      "Improve communications between testers and case managers by 15%",
      "Achieved 100% completion of ticket goals over the course of multiple Agile sprints",
      "Led a team of 10 members"
    ],
    technologies: ["PHP", "HTML", "CSS", "Javascript", "SQL", "Google Cloud"]
  },
  {
    id: 3,
    title: "Software Developer Intern",
    company: "Memorial Sloan Kettering",
    location: "Manhattan, NY",
    period: "June 2024 - August 2024",
    description: "Built and maintained features that were core to patient experience during a transitional period to new technologies.",
    achievements: [
      "Implemented responsive features for Remote Monitoring",
      "Improve doctor-patient communication efficiency for over 70,000+ patients",
      "Collaborated in cross-function Agile teams utilizing version control for project deployment"
    ],
    technologies: ["React", "JavaScript", "SQL", "Outsystems", "Github", "Agile"]
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "Pharmaspectra",
    location: "Manhattan, NY",
    period: "June 2021 - August 2021",
    description: "Established a new support portal for employees utilizing Zendesk Chatbot AI.",
    achievements: [
      "Provided a new centralized ticket system to assist 250+ employees",
      "Integrated Zendesk API to boost automated support engagement by 35%",
      "Reduced resolution time for tickets by 40%"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Zendesk API", "Github"]
  }
];

const education = [
  {
    id: 1,
    degree: "Bachelor of Arts in Computer Science",
    school: "CUNY Hunter College",
    location: "Manhattan, NYC",
    period: "2021 - 2025",
    description: "Focused on software engineering, algorithms, and data structures. Graduated Magna Cum Laude. Minor in Sociology. Thomas Hunter Honors Program."
  },
  {
    id: 2,
    degree: "Bachelor of Arts in Economics",
    school: "CUNY Hunter College",
    location: "Manhattan, NYC",
    period: "2021 - 2025",
    description: "Focused on global economics, public policy, and real-world mathematical applications. Graduated Manga Cum Laude. Minor in Sociology. Thomas Hunter Honors Program."
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