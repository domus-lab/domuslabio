import * as React from "react";

import { cn } from "@/lib/utils";

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "Description of project one.",
      image: "/path/to/image1.jpg",
    },
    {
      title: "Project Two",
      description: "Description of project two.",
      image: "/path/to/image2.jpg",
    },
    {
      title: "Project Three",
      description: "Description of project three.",
      image: "/path/to/image3.jpg",
    },
  ];

  return (
    <section className="py-20" id="work">
      <div className="container">
        <h2 className="text-4xl font-bold mb-4 text-center">Our Projects</h2>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Discover how we've helped businesses transform their ideas into successful digital products.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
