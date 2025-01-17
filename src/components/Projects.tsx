import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Projects = () => {
  const [showMore, setShowMore] = React.useState(false);

  const projects = [
    {
      title: "Gronda",
      description: "Largest chef platform in the world. With +2 Mill users they connect chef through in inspiration and content.",
      image: "/lovable-uploads/a53372c0-6dc7-4687-a62a-883e941fb865.png",
    },
    {
      title: "Aeddix",
      description: "Aeddix provides cutting-edge IoT solutions, digital process automation, and smart sensors tailored for SMEs.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
    {
      title: "Alex Powell Racing",
      description: "Mercedes junior driver. We support him building in less than 1 week his professional website with live updates.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      title: "Coming Soon",
      description: "New exciting project in development.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
    {
      title: "Coming Soon",
      description: "New exciting project in development.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "Coming Soon",
      description: "New exciting project in development.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
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
                "bg-[#2A2A2A] rounded-lg shadow-md overflow-hidden transition-all duration-300",
                index > 2 && "animate-fade-in"
              )}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
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
