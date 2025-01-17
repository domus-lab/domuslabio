import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const projects = [
  {
    logo: "/placeholder.svg",
    name: "Project Alpha",
    description: "A revolutionary SaaS platform for business automation",
  },
  {
    logo: "/placeholder.svg",
    name: "Project Beta",
    description: "AI-powered analytics dashboard for e-commerce",
  },
  {
    logo: "/placeholder.svg",
    name: "Project Gamma",
    description: "Mobile-first marketplace application",
  },
];

export const Projects = () => {
  return (
    <section className="py-20" id="work">
      <div className="container">
        <h2 className="text-4xl font-bold mb-4 text-center">Our Projects</h2>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Discover how we've helped businesses transform their ideas into successful digital products.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.name} className="group cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <img src={project.logo} alt={project.name} className="h-12 w-auto mb-4" />
                <CardTitle className="flex items-center justify-between">
                  {project.name}
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};