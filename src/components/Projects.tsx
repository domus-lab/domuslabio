
import * as React from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const Projects = () => {
  const [showMore, setShowMore] = React.useState(false);

  const projects = [
    {
      title: "Gronda",
      description: "Largest chef platform in the world with +2 Million users. They connect chef through in inspiration and content.",
      image: "/lovable-uploads/a53372c0-6dc7-4687-a62a-883e941fb865.png",
      tags: ["App", "Web", "Infrastructure", "Cost opt", "Hiring", "Fractional CTO"],
      inProgress: false,
      url: "https://gronda.com",
    },
    {
      title: "Aeddix",
      description: "Aeddix provides cutting-edge IoT solutions, digital process automation, and smart sensors tailored for SMEs.",
      image: "/lovable-uploads/4ace3f6b-db75-4fbc-99a3-dd2275ff51f9.png",
      tags: ["Web", "Infrastructure", "Cost opt"],
      inProgress: false,
      url: "https://aeddix.com",
    },
    {
      title: "Notrispace",
      description: "Nutrition made easy. A modern software for nutritionists to grow their practice and access AI tools.",
      image: "/lovable-uploads/8efbdae3-a4f9-4903-8341-6619f84c2dc9.png",
      tags: ["Web", "AI Integration", "UX Design"],
      inProgress: false,
      url: "https://notrispace.com",
    },
    {
      title: "Alex Powell Racing",
      description: "Mercedes-AMG PETRONAS F1 junior driver. We are curently working on his professional website with live updates.",
      image: "/lovable-uploads/511fd109-4ebe-489f-94e6-44f202d8c1cc.png",
      tags: ["Web", "Automations"],
      inProgress: false,
      url: "https://alexpowellracing.com",
    },
    {
      title: "Domus Table",
      description: "Connect with founders and expand your network through curated culinary experiences.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Design", "Web"],
      inProgress: true,
      url: "https://domustable.com",
    },
    {
      title: "Sylvi Penpal",
      description: "Practice conversation in your target language. Text or speak with AI penpals or your friends (regardless of their language or level). Stop learning random words and start having real conversations.",
      image: "/lovable-uploads/38293f32-2c7e-4673-8fc9-617b2623ad7a.png",
      tags: ["Fractional CTO", "App", "Infrastructure"],
      inProgress: true,
      url: "",
    },
  ];

  // Filter out ICSL as requested
  const filteredProjects = projects.filter(project => project.title !== "ICSL");
  const visibleProjects = showMore ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section className="py-12" id="work">
      <div className="container">
        <h2 className="text-4xl font-bold mb-4 text-center">Projects</h2>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Discover how we've helped businesses transform their ideas into successful digital products.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <a 
              key={index}
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "block rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg z-10 bg-white group",
                index > 2 && "animate-fade-in"
              )}
            >
              <div className="w-full h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                {project.url && (
                  <div className="absolute top-3 right-3 bg-white/90 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={16} className="text-gray-700" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold group-hover:underline">{project.title}</h3>
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
            </a>
          ))}
        </div>
        
        {!showMore && filteredProjects.length > 3 && (
          <div className="mt-12 text-center relative z-10">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowMore(true)}
              className="group hover:bg-[#2A2A2A]"
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
