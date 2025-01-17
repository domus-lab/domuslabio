import React from "react";

export const Process = () => {
  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Our Process</h2>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          We follow a structured approach to ensure the success of your project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#2A2A2A] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Discovery</h3>
            <p className="text-muted-foreground">
              We start by understanding your needs and goals to create a tailored plan.
            </p>
          </div>
          <div className="bg-[#2A2A2A] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Design</h3>
            <p className="text-muted-foreground">
              Our design team crafts intuitive and engaging user experiences.
            </p>
          </div>
          <div className="bg-[#2A2A2A] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Development</h3>
            <p className="text-muted-foreground">
              We build robust and scalable solutions using the latest technologies.
            </p>
          </div>
          <div className="bg-[#2A2A2A] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Testing</h3>
            <p className="text-muted-foreground">
              Rigorous testing ensures that your product is reliable and bug-free.
            </p>
          </div>
          <div className="bg-[#2A2A2A] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Launch</h3>
            <p className="text-muted-foreground">
              We help you launch your product successfully and monitor its performance.
            </p>
          </div>
          <div className="bg-[#2A2A2A] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-muted-foreground">
              Our team provides ongoing support to ensure your continued success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
