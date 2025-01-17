export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation call",
      description: "We discuss your vision, goals, and requirements",
    },
    {
      number: "02",
      title: "Planning",
      description: "We create a detailed roadmap and technical specifications",
    },
    {
      number: "03",
      title: "Project agreement",
      description: "We align on deliverables, timeline, and costs",
    },
    {
      number: "04",
      title: "Weekly sprints",
      description: "Regular development cycles with continuous feedback",
    },
    {
      number: "05",
      title: "Release",
      description: "We deploy your solution and ensure smooth operation",
    },
    {
      number: "06",
      title: "Support",
      description: "Ongoing maintenance and improvements as needed",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <h2 className="text-4xl font-bold mb-4 text-center">Our Process</h2>
        <p className="text-lg text-muted-foreground mb-16 text-center max-w-2xl mx-auto">
          A proven methodology that ensures successful project delivery and client satisfaction.
        </p>
        <div className="relative max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const isEven = (index + 1) % 2 === 0;
            
            return (
              <div key={step.number} className="relative flex items-start mb-24 last:mb-0">
                {/* Connecting line to next step */}
                {index < steps.length - 1 && (
                  <div className="absolute">
                    {/* For odd numbered steps (going to even) */}
                    {!isEven && (
                      <svg className="absolute -right-[200px] top-8 w-[200px] h-[100px]" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="M0 0 C50 0, 50 0, 100 50 C150 100, 150 100, 200 100" 
                          stroke="currentColor" 
                          className="text-primary/20"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    )}
                    {/* For even numbered steps (going to odd) */}
                    {isEven && (
                      <svg className="absolute -left-[200px] top-8 w-[200px] h-[100px]" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="M200 0 C150 0, 150 0, 100 50 C50 100, 50 100, 0 100" 
                          stroke="currentColor" 
                          className="text-primary/20"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    )}
                  </div>
                )}
                
                {/* Content wrapper */}
                <div className={`w-full flex ${isEven ? 'md:flex-row-reverse justify-end' : 'md:flex-row'}`}>
                  {/* Number circle */}
                  <div className="flex-none relative z-10">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  
                  {/* Text content */}
                  <div className={`flex-1 pt-3 ${
                    isEven 
                      ? 'md:text-right md:pr-8 md:pl-24' 
                      : 'md:text-left md:pl-8 md:pr-24'
                  }`}>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};