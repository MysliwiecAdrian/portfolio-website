import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Unordinary - AI Powered Calendar",
    description: "A web application designed to help busy individuals maintain their hobbies through intelligent, AI-driven scheduling.",
    image: "https://github.com/KaziMansha/Unordinary/blob/main/src/assets/Unordinary_Mission.png?raw=true",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "GroqAI"],
    liveUrl: "#",
    githubUrl: "https://github.com/KaziMansha/Unordinary"
  },
  {
    id: 2,
    title: "Campus Management System",
    description: "User-centered web app that allows students/faculty to browse CUNY campuses and enroll/unenroll students into the database.",
    image: "https://media.istockphoto.com/id/1386672473/photo/businessman-using-a-computer-to-document-management-concept-online-documentation-database-and.jpg?s=612x612&w=0&k=20&c=c3IDkl2DDJkUKrH1z7fPqw4XXoIn7CfaS14DK8xGqJQ=",
    technologies: ["React", "Node.js", "PostgreSQL", "Express.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/HanzDG/project-client-side"
  },
  {
    id: 3,
    title: "Operating System Simulation",
    description: "Analytics dashboard with real-time data visualization and advanced filtering capabilities.",
    image: "https://media.gettyimages.com/id/1226017761/video/flying-through-binary-code-blue-loopable-animation-computer-software-artificial-intelligence.jpg?s=640x640&k=20&c=BcGrMCUYslT9o8Md-X6P7uB0noq56rG0FdEbqe7cBhA=",
    technologies: ["C++"],
    liveUrl: "#",
    githubUrl: "https://github.com/MysliwiecAdrian/os-simulation"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work in web development, mobile apps, and design. 
              Each project represents a unique challenge and solution.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2">
                  {/* <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button> */}
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                      <a href={project.githubUrl}>Code</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <a href="https://github.com/MysliwiecAdrian?tab=repositories">View All Projects</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}