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
          {/* Line connecting all points */}
          <div className="absolute top-8 left-8 h-[calc(100%-4rem)] w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-px" />
          
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`relative flex gap-8 mb-12 last:mb-0 items-start ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Number and point */}
              <div className="flex-none relative z-10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {step.number}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className={`flex-1 pt-3 ${
                index % 2 === 0 ? 'md:pr-24' : 'md:pl-24'
              }`}>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};