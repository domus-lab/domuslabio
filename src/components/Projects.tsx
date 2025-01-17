import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const Projects = () => {
  const [showMore, setShowMore] = React.useState(false);

  const projects = [
    {
      title: "Gronda",
      description: "Largest chef platform in the world. With +2 Mill users they connect chef through in inspiration and content.",
      image: "/lovable-uploads/a53372c0-6dc7-4687-a62a-883e941fb865.png",
      tags: ["App", "Web", "Infrastructure", "Cost opt", "Hiring", "Fractional CTO"],
      inProgress: false,
    },
    {
      title: "Aeddix",
      description: "Aeddix provides cutting-edge IoT solutions, digital process automation, and smart sensors tailored for SMEs.",
      image: "/lovable-uploads/4ace3f6b-db75-4fbc-99a3-dd2275ff51f9.png",
      tags: ["Web", "Infrastructure", "Cost opt", "Fractional CTO"],
      inProgress: false,
    },
    {
      title: "Alex Powell Racing",
      description: "Mercedes junior driver. We support him building in less than 1 week his professional website with live updates.",
      image: "/lovable-uploads/511fd109-4ebe-489f-94e6-44f202d8c1cc.png",
      tags: ["Web", "Automations"],
      inProgress: true,
    },
    {
      title: "ICSL",
      description: "Leading international shipping company in the caribean",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tags: ["Tooling", "Automation"],
      inProgress: true,
    },
    {
      title: "Domus Table",
      description: "Private dinners for private founders. Connect and grow your network through the power of unique culinary experiences.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Design", "Web"],
      inProgress: true,
    },
    {
      title: "Coming Soon",
      description: "New exciting project in development.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: [],
      inProgress: false,
    },
  ];

  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <section className="py-20" id="work">
      <div className="container">
        <h2 className="text-4xl font-bold mb-4 text-center">Last projects</h2>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Discover how we've helped businesses transform their ideas into successful digital products.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-black rounded-lg shadow-md overflow-hidden transition-all duration-300",
                index > 2 && "animate-fade-in"
              )}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.inProgress && (
                    <Badge variant="secondary" className="bg-yellow-600/20 text-yellow-500 hover:bg-yellow-600/30">
                      In Progress
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary"
                      className="bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {!showMore && (
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowMore(true)}
              className="group"
            >
              <ChevronDown className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
              Show More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;