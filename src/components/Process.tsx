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
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          A proven methodology that ensures successful project delivery and client satisfaction.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-primary">{step.number}</div>
              <div>
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